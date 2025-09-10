"use server";
import { currentUser } from "@/modules/auth/actions";
import { prisma } from "@/config/db.config";
import { revalidatePath } from "next/cache";
export const getAllPlaygroundForCurrentUser = async () => {
  try {
    const user = await currentUser();
    const playground = await prisma.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark: {
          where: {
            userId: user?.id,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
    return playground;
  } catch (error) {
    console.error("Error fetching playgrounds:", error);
    return null;
  }
};

export const createPlayground = async (data: {
  title: string;
  template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
  description?: string;
}) => {
  try {
    const user = await currentUser();
    const userId = user?.id;
    if (!userId) throw new Error("User not found");
    const { template, title, description } = data;
    const playground = await prisma.playground.create({
      data: {
        title,
        template,
        description,
        userId,
      },
    });
    return playground;
  } catch (error) {
    console.error("Error creating playground:", error);
    return null;
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    const project = await prisma.playground.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  const { title, description } = data;
  try {
    await prisma.playground.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error updating project:", error);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlayground = await prisma.playground.findUnique({
      where: {
        id,
      },
    });
    if (!originalPlayground) {
      throw new Error("Project not found");
    }
    const copiedPlayground = await prisma.playground.create({
      data: {
        title: `${originalPlayground.title} Copy`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error duplicating project:", error);
  }
};

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean
) => {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    throw new Error("User Id is Required");
  }

  try {
    if (isChecked) {
      await prisma.starMark.create({
        data: {
          userId: userId!,
          playgroundId,
          isMarked: isChecked,
        },
      });
    } else {
      await prisma.starMark.delete({
        where: {
          userId_playgroundId: {
            userId,
            playgroundId: playgroundId,
          },
        },
      });
    }
    revalidatePath("/dashboard");
    return { success: true, isMarked: isChecked };
  } catch (error) {
    console.error("Error updating problem:", error);
    return { success: false, error: "Failed to update problem" };
  }
};

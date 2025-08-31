"use server";
import { currentUser } from "@/modules/auth/actions";
import { prisma } from "@/config/db.config";
export const getAllPlaygroundForCurrentUser = async () => {
  try {
    const user = await currentUser();
    const playground = await prisma.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark:{
            where : {
                userId : user?.id
            },
            select:{
                isMarked : true
            }
        }
      },
    });
    return playground;
  } catch (error) {
    console.error("Error fetching playgrounds:", error);
    return null;
  }
};

"use server";
import { auth } from "@/auth";
import { prisma } from "@/config/db.config";
import { id } from "date-fns/locale";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        accounts: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAccountByUserId = async (id: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId: id,
      },
    });
    return account;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const currentUser = async () => {
  const user = await auth();
  return user?.user;
};

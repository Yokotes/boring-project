import { prisma } from "@/prisma/client";

export const authUser = async (user: { login: string; password: string }) => {
  const found = await prisma.user.findFirst({
    where: {
      name: user.login,
    },
  });

  // TODO: Encrypt password later
  if (found?.password === user.password) return true;

  return false;
};

export const checkAuth = async (name: string) => {
  const found = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });

  if (found) return found.name;

  return false;
};

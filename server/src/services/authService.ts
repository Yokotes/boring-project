import { prisma } from "@/prisma/client";

export const authUser = async (user: { login: string; password: string }) => {
  const found = await prisma.user.findFirst({
    where: {
      name: user.login,
    },
  });

  // TODO: Encrypt password later
  if (found?.name === user.login && found?.password === user.password)
    return true;

  return false;
};

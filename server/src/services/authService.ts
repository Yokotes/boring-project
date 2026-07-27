import jwt from "jsonwebtoken";
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

export const checkAuth = async (token: string) => {
  const { user } = jwt.verify(token, import.meta.env.VITE_JWT_SECRET) as {
    user: string;
  };

  const found = await prisma.user.findFirst({
    where: {
      name: user,
    },
  });

  if (found) return found.name;

  return false;
};

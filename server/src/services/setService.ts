import { prisma } from "@/prisma/client";

export const getSetById = (id: number) => {
  return prisma.set.findUnique({ where: { id }, include: { exercises: true } });
};

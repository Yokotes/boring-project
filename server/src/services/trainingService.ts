import { prisma } from "@/prisma/client";

export const getAllTrainings = () => {
  return prisma.training.findMany({ include: { sets: true } });
};

export const getTrainingById = (id: number) => {
  return prisma.training.findUnique({ where: { id }, include: { sets: true } });
};

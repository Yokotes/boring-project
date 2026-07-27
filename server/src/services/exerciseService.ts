import { prisma } from "@/prisma/client";
import type { ExerciseRequestBody } from "../types";

export const getAllExercises = () => {
  return prisma.exercise.findMany();
};

export const createExercise = (exercise: ExerciseRequestBody) => {
  return prisma.exercise.create({ data: exercise });
};

export const updateExercise = (id: number, exercise: ExerciseRequestBody) => {
  return prisma.exercise.update({ where: { id }, data: exercise });
};

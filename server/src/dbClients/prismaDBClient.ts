import { prisma } from "@/prisma/client";
import type { Exercise, Set, Training, User } from "../model";
import type { DBCLient } from "./types";
import type {
  ExerciseFindManyArgs,
  ExerciseFindUniqueArgs,
  SetFindUniqueArgs,
  TrainingFindManyArgs,
  TrainingFindUniqueArgs,
  UserFindUniqueArgs,
} from "../../generated/prisma/models";

export class PrismaDBClient implements DBCLient {
  // User
  findUniqueUser(options: UserFindUniqueArgs): Promise<User | null> {
    return prisma.user.findUnique(options);
  }

  // Exercise
  createExercise(
    exercise: Omit<Exercise, "id" | "setExercises">,
  ): Promise<Exercise> {
    return prisma.exercise.create({ data: exercise });
  }
  updateExerciseById(
    id: number,
    exercise: Omit<Exercise, "id" | "setExercises">,
  ): Promise<Exercise> {
    return prisma.exercise.update({
      where: { id },
      data: exercise,
    });
  }
  findManyExercises(options: ExerciseFindManyArgs): Promise<Exercise[]> {
    return prisma.exercise.findMany(options);
  }
  findUniqueExercise(
    options: ExerciseFindUniqueArgs,
  ): Promise<Exercise | null> {
    return prisma.exercise.findUnique(options);
  }

  // Sets
  findUniqueSet(options: SetFindUniqueArgs): Promise<Set | null> {
    return prisma.set.findUnique({ ...options, include: { exercises: true } });
  }

  // Trainings
  findManyTrainings(options?: TrainingFindManyArgs): Promise<Training[]> {
    return prisma.training.findMany({
      ...options,
      include: { sets: true },
    });
  }
  findUniqueTraining(
    options: TrainingFindUniqueArgs,
  ): Promise<Training | null> {
    return prisma.training.findUnique({ ...options, include: { sets: true } });
  }
}

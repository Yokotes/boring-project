import type { Exercise, Set, Training, User } from "../model";

export interface DBCLient {
  // User
  findUniqueUser(options: unknown): Promise<User | null>;

  // Exercises
  findManyExercises(options?: unknown): Promise<Exercise[]>;
  findUniqueExercise(options: unknown): Promise<Exercise | null>;
  createExercise(exercise: Omit<Exercise, "id">): Promise<Exercise>;
  updateExerciseById(
    id: number,
    exercise: Omit<Exercise, "id">,
  ): Promise<Exercise>;

  // Sets
  findUniqueSet(options: unknown): Promise<Set | null>;

  // Trainings
  findManyTrainings(options?: unknown): Promise<Training[]>;
  findUniqueTraining(options: unknown): Promise<Training | null>;
}

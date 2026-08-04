import type { ExerciseWithReps } from "./exercise";

export interface SetExercise {
  id: number;
  setId: number;
  reps: number;
  exerciseId: number;
}

export interface Set {
  id: number;
  trainingId: number;
  exercises?: SetExercise[];
}

export interface SetWithExercises {
  id: number;
  exercises: ExerciseWithReps[];
}

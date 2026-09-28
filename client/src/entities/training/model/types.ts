import type { Exercise } from "@/entities/exercise/model";

type ExerciseWithReps = Exercise & { reps: number };

type ExerciseWithRepsArray = Exercise & { reps: number[] };

interface Set {
  id: number;
  exercises: ExerciseWithReps[];
}

export interface Training {
  id: number;
  title: string;
  sets: Set[];
}

export interface ListTraining {
  id: number;
  title: string;
  exercises: ExerciseWithRepsArray[];
}

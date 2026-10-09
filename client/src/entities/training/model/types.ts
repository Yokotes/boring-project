import type { Exercise } from "@/entities/exercise/model";

type ExerciseWithReps = Exercise & { reps: number };

type ExerciseWithRepsArray = Exercise & { reps: number[] };

interface Set {
  id: number;
  exercises: ExerciseWithReps[];
}

export interface TrainingDTO {
  id: number;
  title: string;
  sets: {
    id: number;
    trainingId: number;
    exercises: {
      id: number;
      reps: number;
      exerciseId: number;
      setId: number;
      exercise: {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
      };
    }[];
  }[];
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

export interface TrainingTableView {
  title: string;
  headers: string[];
  rows: {
    id: number;
    title: string;
    imageUrl?: string;
    description: string;
    reps: string[];
    totalReps: number;
  }[];
  totalRepsArr: number[];
  total: number;
}

// FORM FIELDS
interface ExerciseFields {
  id: number;
  title: string;
  reps: number;
}

interface SetFields {
  exercises: ExerciseFields[];
}
export interface TrainingFields {
  title: string;
  sets: SetFields[];
}

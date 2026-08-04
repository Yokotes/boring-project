export interface Exercise {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
}

export type ExerciseWithReps = Exercise & { reps: number };

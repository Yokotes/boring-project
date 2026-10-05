export interface Exercise {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ExerciseFields {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ExerciseOption {
  label: string;
  value: number;
}

export interface SelectExerciseFields {
  exercise: ExerciseOption;
}

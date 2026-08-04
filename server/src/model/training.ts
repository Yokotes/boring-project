import type { Set, SetWithExercises } from "./set";

export interface Training {
  id: number;
  title: string;
  sets: Set[];
}

export interface DetailedTraining {
  id: number;
  title: string;
  sets: SetWithExercises[];
}

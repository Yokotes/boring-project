import type { Exercise } from "../model";

export const transformToExerciseOptions = (exercises: Exercise[]) => {
  return exercises.map((item) => ({ label: item.title, value: item.id }));
};

import type { ListTraining, Training } from "../model";

type ExerciseMap = Record<
  number,
  ListTraining["exercises"][number] & { index: number }
>;

// TODO: Надо оптимизировать и реализовать по-легче, слишком сложно и явно замудренно.
export const transformToListTrainings = (
  trainings: Training[],
): ListTraining[] => {
  const exerciseMaps = trainings.map((training) =>
    training.sets.reduce((acc, set, setIdx) => {
      set.exercises.forEach((item, index) => {
        if (acc[item.id]) {
          acc[item.id].reps[setIdx] = item.reps;
        } else {
          const reps = Array(setIdx);
          reps[setIdx] = item.reps;

          acc[item.id] = { ...item, reps, index };
        }
      });

      return acc;
    }, {} as ExerciseMap),
  );

  return trainings.map((item, index) => ({
    id: item.id,
    title: item.title,
    exercises: Object.keys(exerciseMaps[index]).reduce(
      (acc, key) => {
        const exercise = exerciseMaps[index][Number(key)];
        acc[exercise.index] = {
          id: exercise.id,
          reps: exercise.reps,
          description: exercise.description,
          title: exercise.title,
          imageUrl: exercise.imageUrl,
        };

        return acc;
      },
      [] as ListTraining["exercises"],
    ),
  })) as ListTraining[];
};

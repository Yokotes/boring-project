import type { ListTraining, TrainingDTO } from "../model";

const tranformToListItem = ({ id, title, sets }: TrainingDTO): ListTraining => {
  const exerciseIndexMap = new Map<number, number>();
  const exercises = [] as ListTraining["exercises"];

  sets.forEach((set, setIndex) => {
    set.exercises.forEach(({ exercise, reps }) => {
      if (exerciseIndexMap.has(exercise.id)) {
        const index = exerciseIndexMap.get(exercise.id);
        exercises[index!].reps[setIndex] = reps;
      } else {
        const repsArr = new Array(sets.length);
        repsArr[setIndex] = reps;

        exerciseIndexMap.set(exercise.id, exercises.length);
        exercises.push({
          id: exercise.id,
          description: exercise.description,
          title: exercise.title,
          imageUrl: exercise.imageUrl,
          reps: repsArr,
        });
      }
    });
  });

  return { id, title, exercises };
};

// TODO: Надо оптимизировать и реализовать по-легче, слишком сложно и явно замудренно.
export const transformToListTrainings = (
  trainings: TrainingDTO[],
): ListTraining[] => {
  return trainings.map(tranformToListItem);
};

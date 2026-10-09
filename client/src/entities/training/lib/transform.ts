import type { ListTraining, TrainingDTO, TrainingTableView } from "../model";

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

export const transformTableView = (
  training: TrainingDTO,
): TrainingTableView => {
  const headers = training.sets.map((_, index) => `Подход ${index + 1}`);
  const listView = tranformToListItem(training);
  const rows = listView.exercises.map((item) => {
    return {
      ...item,
      reps: [...item.reps].map((val) => (val ? val.toString() : "-")),
      totalReps: item.reps.reduce((acc, item) => acc + item, 0),
    } as TrainingTableView["rows"][number];
  });
  const totalRepsArr = headers.map((_, index) => {
    return listView.exercises.reduce((acc, item) => {
      return acc + (item.reps[index] || 0);
    }, 0);
  });
  const total = totalRepsArr.reduce((acc, item) => acc + item, 0);

  return { title: training.title, headers, rows, totalRepsArr, total };
};

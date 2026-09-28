// import { getTrainingsQueryFn } from "@/entities/training/api";
// import { useQuery } from "@tanstack/react-query";

import { transformToListTrainings } from "@/entities/training/lib";
import type { Training } from "@/entities/training/model";

const MOCK = [
  {
    id: -1,
    title: "Тестовая тренировка",
    sets: [
      {
        id: -200,
        exercises: [
          { id: -100, description: "Тест", reps: 20, title: "Упражнение" },
        ],
      },
      {
        id: -1000,
        exercises: [
          { id: -100, description: "Тест", reps: 10, title: "Упражнение" },
          { id: -10, description: "Второе", reps: 5, title: "Ыторое" },
        ],
      },
    ],
  },
] as Training[];

export const useTrainings = () => {
  // const { data: trainings } = useQuery({
  //   initialData: [],
  //   queryKey: ["training"],
  //   queryFn: getTrainingsQueryFn,
  // });

  return {
    trainings: transformToListTrainings(MOCK),
  };
};

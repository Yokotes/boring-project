import { getTrainingsQueryFn } from "@/entities/training/api";
import { transformToListTrainings } from "@/entities/training/lib";
import { useQuery } from "@tanstack/react-query";

export const useTrainings = () => {
  const { data: trainings } = useQuery({
    initialData: [],
    queryKey: ["training"],
    queryFn: getTrainingsQueryFn,
  });

  return {
    trainings: transformToListTrainings(trainings),
  };
};

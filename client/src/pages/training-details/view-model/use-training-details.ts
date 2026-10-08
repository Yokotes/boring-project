import { getTrainingByIdQueryFn } from "@/entities/training/api";
import { useQuery } from "@tanstack/react-query";

export const useTrainingDetails = (id: number) => {
  const { data: training } = useQuery({
    initialData: null,
    queryKey: ["training", id],
    queryFn: getTrainingByIdQueryFn,
  });

  return { training };
};

import { getTrainingByIdQueryFn } from "@/entities/training/api";
import { transformTableView } from "@/entities/training/lib";
import { useQuery } from "@tanstack/react-query";

export const useTrainingDetails = (id: number) => {
  const { data: training } = useQuery({
    initialData: null,
    queryKey: ["training", id],
    queryFn: getTrainingByIdQueryFn,
  });

  return {
    title: training?.title,
    tableView: training ? transformTableView(training) : null,
  };
};

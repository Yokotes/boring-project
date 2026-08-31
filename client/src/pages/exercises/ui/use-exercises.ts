import { getExercisesQueryFn } from "@/entities/exercise/api";
import { useQuery } from "@tanstack/react-query";

// TODO: Maybe move VM hooks to VM segment???
export const useExercises = () => {
  const { data } = useQuery({
    initialData: [],
    queryKey: ["exercise"],
    queryFn: getExercisesQueryFn,
  });

  return { exercises: data };
};

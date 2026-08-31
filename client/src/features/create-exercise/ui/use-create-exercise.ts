import { createExerciseMutationFn } from "@/entities/exercise/api";
import type { ExerciseFields } from "@/entities/exercise/model";
import { queryClient } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useCreateExercise = (onSubmit?: () => void) => {
  const { register, handleSubmit } = useForm<ExerciseFields>();
  const { mutateAsync } = useMutation({
    mutationKey: ["exercise"],
    mutationFn: createExerciseMutationFn,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["exercise"] });
    },
  });

  const submitHandler = (vals: ExerciseFields) => {
    mutateAsync(vals).then((res) => {
      console.log("Упражнеие было создано!", res);
      onSubmit?.();
    });
  };

  return {
    fieldProps: {
      title: register("title"),
      description: register("description"),
      imageUrl: register("imageUrl"),
    },
    onSubmit: handleSubmit(submitHandler),
  };
};

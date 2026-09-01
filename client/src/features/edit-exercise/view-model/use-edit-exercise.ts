import { editExerciseMutationFn } from "@/entities/exercise/api";
import type { ExerciseFields } from "@/entities/exercise/model";
import { queryClient } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useEditExercise = ({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: {
    id?: number;
    title?: string;
    description?: string;
    imageUrl?: string;
  };
  onSubmit?: () => void;
}) => {
  const { register, handleSubmit } = useForm<ExerciseFields & { id: number }>({
    defaultValues,
  });
  const { mutateAsync } = useMutation({
    mutationKey: ["exercise"],
    mutationFn: editExerciseMutationFn,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["exercise"] });
    },
  });

  const submitHandler = (vals: ExerciseFields & { id: number }) => {
    mutateAsync(vals).then((res) => {
      // TODO: Replace with notification
      console.log("Упражнеие было измененно!", res);
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

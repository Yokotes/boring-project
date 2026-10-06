import { createTrainingMutationFn } from "@/entities/training/api";
import type { TrainingFields } from "@/entities/training/model";
import { queryClient } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useCreateTraining = (onSubmit?: () => void) => {
  const { register, control, handleSubmit } = useForm<TrainingFields>();
  const { mutateAsync } = useMutation({
    mutationKey: ["training"],
    mutationFn: createTrainingMutationFn,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["training"] });
    },
  });

  const submitHandler = (vals: TrainingFields) => {
    mutateAsync(vals).then((res) => {
      // TODO: Replace with notification
      console.log("Тренировка была создана!", res);
      onSubmit?.();
    });
  };

  return {
    onSubmit: handleSubmit(submitHandler),
    register,
    control,
  };
};

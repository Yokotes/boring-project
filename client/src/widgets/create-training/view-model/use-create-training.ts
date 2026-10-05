import type { TrainingFields } from "@/entities/training/model";
import { useForm } from "react-hook-form";

export const useCreateTraining = (submitHandler?: () => void) => {
  const { register, control, handleSubmit } = useForm<TrainingFields>();

  const onSubmit = (vals: TrainingFields) => {
    console.log(vals);
    submitHandler?.();
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    control,
  };
};

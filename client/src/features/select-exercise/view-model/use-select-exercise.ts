import { getExercisesQueryFn } from "@/entities/exercise/api";
import { transformToExerciseOptions } from "@/entities/exercise/lib";
import type {
  ExerciseOption,
  SelectExerciseFields,
} from "@/entities/exercise/model";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useSelectExercise = (
  submitHandler?: (vals: SelectExerciseFields) => void,
) => {
  const { register, handleSubmit } = useForm<SelectExerciseFields>();
  const { data: exercises } = useQuery({
    initialData: [],
    queryKey: ["exercise"],
    queryFn: getExercisesQueryFn,
  });

  const onSubmit = (vals: SelectExerciseFields) => {
    submitHandler?.(vals);
  };

  const rawSelectProps = register("exercise");

  return {
    onSubmit: handleSubmit(onSubmit),
    selectProps: {
      onChange: (option: ExerciseOption) =>
        rawSelectProps.onChange({
          target: { name: "exercise", value: option },
        }),

      options: transformToExerciseOptions(exercises),
    },
  };
};

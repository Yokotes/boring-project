import {
  RepsInput,
  SetsFieldExerciseLayout,
} from "./sets-field-exercise-layout";
import { Icon } from "@/shared/ui/icon";
import { RemoveSetButton } from "../sets-field-layout";
import type { UseFormRegisterReturn } from "react-hook-form";

export const SetsFieldExercise = ({
  title,
  repsProps,
  onRemove,
}: {
  title: string;
  repsProps: UseFormRegisterReturn;
  onRemove?: () => void;
}) => {
  return (
    <SetsFieldExerciseLayout>
      <SetsFieldExerciseLayout.Title>{title}</SetsFieldExerciseLayout.Title>
      <RepsInput min={1} defaultValue={1} {...repsProps} />
      <RemoveSetButton onClick={onRemove}>
        <Icon.Trash />
      </RemoveSetButton>
    </SetsFieldExerciseLayout>
  );
};

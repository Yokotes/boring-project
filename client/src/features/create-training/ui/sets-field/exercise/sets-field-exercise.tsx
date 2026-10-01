import {
  RepsInput,
  SetsFieldExerciseLayout,
} from "./sets-field-exercise-layout";
import { Icon } from "@/shared/ui/icon";
import { RemoveSetButton } from "../sets-field-layout";

export const SetsFieldExercise = () => {
  return (
    <SetsFieldExerciseLayout>
      <SetsFieldExerciseLayout.Title>Упражнение</SetsFieldExerciseLayout.Title>
      <RepsInput min={1} defaultValue={1} />
      <RemoveSetButton>
        <Icon.Trash />
      </RemoveSetButton>
    </SetsFieldExerciseLayout>
  );
};

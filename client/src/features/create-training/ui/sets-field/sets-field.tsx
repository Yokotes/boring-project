import { Icon } from "@/shared/ui/icon";
import {
  AddExerciseButton,
  AddSetButton,
  RemoveSetButton,
  SetsFieldLayout,
} from "./sets-field-layout";
import { SetsFieldExercise } from "./exercise";

export const SetsField = () => {
  const exercises = ["kek"];

  return (
    <SetsFieldLayout>
      <SetsFieldLayout.Set>
        <SetsFieldLayout.SetHeader>
          <SetsFieldLayout.SetTitle>Подход 1</SetsFieldLayout.SetTitle>
          <RemoveSetButton>
            <Icon.Trash />
          </RemoveSetButton>
        </SetsFieldLayout.SetHeader>
        <SetsFieldLayout.Exercises>
          {exercises.map(() => (
            <SetsFieldExercise />
          ))}
          <AddExerciseButton>
            <Icon.Add />
            Добавить упражнение
          </AddExerciseButton>
        </SetsFieldLayout.Exercises>
      </SetsFieldLayout.Set>
      <AddSetButton>
        <Icon.Add />
        Добавить подход
      </AddSetButton>
    </SetsFieldLayout>
  );
};

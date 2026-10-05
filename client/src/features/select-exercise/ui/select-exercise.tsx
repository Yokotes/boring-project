import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import type { SelectExerciseFields } from "@/entities/exercise/model";
import { SelectExerciseLayout } from "./select-exercise-layout";
import { useSelectExercise } from "../view-model/use-select-exercise";

export const SelectExercise = ({
  onCancel,
  onSubmit: submitHandler,
}: {
  onCancel?: () => void;
  onSubmit?: (val: SelectExerciseFields) => void;
}) => {
  const { onSubmit, selectProps } = useSelectExercise(submitHandler);

  return (
    <SelectExerciseLayout
      onSubmit={(e) => {
        e.stopPropagation();
        onSubmit(e);
      }}
    >
      <Select {...selectProps} />
      <SelectExerciseLayout.Actions>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Отмена
        </Button>
        <Button>Добавить</Button>
      </SelectExerciseLayout.Actions>
    </SelectExerciseLayout>
  );
};

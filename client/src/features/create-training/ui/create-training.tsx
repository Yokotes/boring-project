import { Button } from "@/shared/ui/button";
import { TextField } from "@/shared/ui/text-field";
import { CreateTrainingLayout } from "./create-training-layout";
import { SetsField } from "./sets-field";

export const CreateTraining = ({
  onCancel,
  onSubmit: submitHandler,
}: {
  onCancel?: () => void;
  onSubmit?: () => void;
}) => {
  return (
    <CreateTrainingLayout>
      <TextField placeholder="Название" />
      <SetsField />

      <CreateTrainingLayout.Actions>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Отмена
        </Button>
        <Button>Добавить</Button>
      </CreateTrainingLayout.Actions>
    </CreateTrainingLayout>
  );
};

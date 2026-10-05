import { Button } from "@/shared/ui/button";
import { TextField } from "@/shared/ui/text-field";
import { CreateTrainingLayout } from "./create-training-layout";
import { SetsField } from "./sets-field";
import { useCreateTraining } from "../view-model/use-create-training";

export const CreateTraining = ({
  onCancel,
  onSubmit: submitHandler,
}: {
  onCancel?: () => void;
  onSubmit?: () => void;
}) => {
  const { control, register, onSubmit } = useCreateTraining(submitHandler);

  return (
    <CreateTrainingLayout onSubmit={onSubmit}>
      <TextField placeholder="Название" {...register("title")} />
      <SetsField control={control} register={register} />
      <CreateTrainingLayout.Actions>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Отмена
        </Button>
        <Button>Добавить</Button>
      </CreateTrainingLayout.Actions>
    </CreateTrainingLayout>
  );
};

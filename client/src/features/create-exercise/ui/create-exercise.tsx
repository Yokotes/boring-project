import { TextField } from "@/shared/ui/text-field";
import { CreateExerciseLayout } from "./create-exercise-layout";
import { useCreateExercise } from "./use-create-exercise";
import { Button } from "@/shared/ui/button";
import { TextArea } from "@/shared/ui/text-area";
import { ImagePreviewField } from "@/shared/ui/image-preview-field";

export const CreateExercise = ({
  onCancel,
  onSubmit: submitHandler,
}: {
  onCancel?: () => void;
  onSubmit?: () => void;
}) => {
  const { fieldProps, onSubmit } = useCreateExercise(submitHandler);

  return (
    <CreateExerciseLayout onSubmit={onSubmit}>
      <ImagePreviewField {...fieldProps.imageUrl} />
      <TextField placeholder="Название" {...fieldProps.title} />
      <TextArea placeholder="Описание" {...fieldProps.description} />
      <CreateExerciseLayout.Actions>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Отмена
        </Button>
        <Button>Добавить</Button>
      </CreateExerciseLayout.Actions>
    </CreateExerciseLayout>
  );
};

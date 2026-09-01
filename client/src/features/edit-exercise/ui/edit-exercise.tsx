import { Button } from "@/shared/ui/button";
import { ImagePreviewField } from "@/shared/ui/image-preview-field";
import { TextArea } from "@/shared/ui/text-area";
import { TextField } from "@/shared/ui/text-field";
import { EditExerciseLayout } from "./edit-exercise-layout";
import { useEditExercise } from "../view-model/use-edit-exercise";

export const EditExercise = ({
  id,
  title,
  description,
  imageUrl,
  onCancel,
  onSubmit: submitHandler,
}: {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
}) => {
  const { fieldProps, onSubmit } = useEditExercise({
    defaultValues: { id, title, description, imageUrl },
    onSubmit: submitHandler,
  });

  return (
    <EditExerciseLayout onSubmit={onSubmit}>
      <ImagePreviewField {...fieldProps.imageUrl} />
      <TextField placeholder="Название" {...fieldProps.title} />
      <TextArea placeholder="Описание" {...fieldProps.description} />
      <EditExerciseLayout.Actions>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Отмена
        </Button>
        <Button>Сохранить</Button>
      </EditExerciseLayout.Actions>
    </EditExerciseLayout>
  );
};

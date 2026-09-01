import { EditExercise } from "@/features/edit-exercise/ui";
import { ExerciseDetails } from "@/features/exercise-details/ui";
import { Button } from "@/shared/ui/button";
import { Show } from "@/shared/ui/show";
import { useState } from "react";

export const ExerciseEditDetails = ({
  id,
  title,
  description,
  imageUrl,
  onEdit,
}: {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  onEdit?: () => void;
}) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <Show when={editMode}>
        <EditExercise
          id={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
          onCancel={() => setEditMode(false)}
          onSubmit={onEdit}
        />
      </Show>
      <Show when={!editMode}>
        <ExerciseDetails
          title={title}
          description={description}
          imageUrl={imageUrl}
          actions={
            <Button onClick={() => setEditMode(true)}>Редактировать</Button>
          }
        />
      </Show>
    </>
  );
};

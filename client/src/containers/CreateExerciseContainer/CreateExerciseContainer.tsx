import { type FC } from "react";
import { ExerciseForm, type ExerciseFields } from "@/components/ExerciseForm";
import styles from "./CreateExerciseContainer.module.scss";
import { Button } from "@/components/Button";
import { useCreateExerciseMutation } from "@/app/api";
import { EMPTY_FUNCTION } from "@/consts";

interface Props {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const CreateExerciseContainer: FC<Props> = ({
  onCancel,
  onSubmit = EMPTY_FUNCTION,
}) => {
  const [createExercise] = useCreateExerciseMutation();

  const handleSubmitForm = async (vals: ExerciseFields) => {
    try {
      const res = await createExercise(vals);

      console.log("Упражнение создано!", res.data);
      onSubmit();
    } catch (error) {
      console.error("Ошибка при создании упражнения", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ExerciseForm
        onSubmit={handleSubmitForm}
        footer={
          <div className={styles.panel}>
            {onCancel && (
              <Button type="button" variant="outlined" onClick={onCancel}>
                Отмена
              </Button>
            )}
            <Button>Добавить</Button>
          </div>
        }
      />
    </div>
  );
};

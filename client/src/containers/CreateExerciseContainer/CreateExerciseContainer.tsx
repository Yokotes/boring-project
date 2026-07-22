import { type FC } from "react";
import { ExerciseForm, type ExerciseFields } from "@/components/ExerciseForm";
import styles from "./CreateExerciseContainer.module.scss";
import { Button } from "@/components/Button";

interface Props {
  onCancel?: () => void;
}

export const CreateExerciseContainer: FC<Props> = ({ onCancel }) => {
  /**
   * CREATE EXERCISE BUSINESS-LOGIC
   */

  const handleSubmitForm = (vals: ExerciseFields) => {
    console.log(vals);
  };

  return (
    <div className={styles.wrapper}>
      <ExerciseForm
        onSubmit={handleSubmitForm}
        renderFooter={() => (
          <div className={styles.panel}>
            <Button>Добавить</Button>
            {onCancel && (
              <Button type="button" variant="outlined" onClick={onCancel}>
                Отмена
              </Button>
            )}
          </div>
        )}
      />
    </div>
  );
};

import { useCallback, useState, type FC } from "react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { ExerciseForm, type ExerciseFields } from "@/components/ExerciseForm";
import { useUpdateExerciseMutation } from "@/app/api";
import styles from "./ExerciseDetailsContainer.module.scss";

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const ExerciseDetailsContainer: FC<Props> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  const [showFields, setShowFields] = useState({
    title,
    description,
    imageUrl,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [update] = useUpdateExerciseMutation();

  const toggleEdit = () => setIsEdit((prev) => !prev);

  const handleSubmit = useCallback(
    async (vals: ExerciseFields) => {
      try {
        const res = await update({ ...vals, id });

        console.log("Упражнение обновлено!", res.data);

        // TODO: Come up with another solution for update shown fields
        setShowFields({
          title: res.data!.title,
          description: res.data!.description,
          imageUrl: res.data!.imageUrl,
        });
        toggleEdit();
      } catch (error) {
        console.error(error);
      }
    },
    [id, update],
  );

  return isEdit ? (
    <ExerciseForm
      fields={showFields}
      onSubmit={handleSubmit}
      footer={
        <div className={styles.panel}>
          <Button type="button" variant="outlined" onClick={toggleEdit}>
            Назад
          </Button>
          <Button>Сохранить</Button>
        </div>
      }
    />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {showFields.imageUrl ? (
          <img
            src={showFields.imageUrl}
            alt={showFields.title}
            className={styles.image}
          />
        ) : (
          <Icon.Dumbbell className={styles.image} />
        )}
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{showFields.title}</h2>
        <p className={styles.description}>{showFields.description}</p>
      </div>

      <div className={`${styles.panel} ${styles.rightSided}`}>
        <Button onClick={toggleEdit}>Редактировать</Button>
      </div>
    </div>
  );
};

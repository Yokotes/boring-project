import type { FC } from "react";
import styles from "./ExerciseDetailsContainer.module.scss";
import { Icon } from "@/components/Icon";

// TODO: Remove when backend will be ready
interface Props {
  title: string;
  description: string;
  imageUrl?: string;
}

export const ExerciseDetailsContainer: FC<Props> = ({
  title,
  description,
  imageUrl,
}) => {
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className={styles.image} />
        ) : (
          <Icon.Dumbbell className={styles.image} />
        )}

        {/* TODO: Maybe replace with Button component, add IconButton??? */}
        <button
          className={styles.deleteButton}
          onClick={handleDelete}
          title="Удалить"
        >
          <Icon.Trash />
        </button>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

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
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className={styles.image} />
        ) : (
          <Icon.Dumbbell className={styles.image} />
        )}
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

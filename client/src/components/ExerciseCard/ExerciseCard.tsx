// ExerciseCard.tsx
import type { FC } from "react";
import styles from "./ExerciseCard.module.scss";
import { Icon } from "../Icon";

interface Props {
  name: string;
  imageUrl?: string;
}

export const ExerciseCard: FC<Props> = ({ name, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className={styles.image} />
        ) : (
          <Icon.Dumbbell className={styles.icon} />
        )}
      </div>
      <p className={styles.name} title={name}>
        {name}
      </p>
    </div>
  );
};

// ExerciseCard.tsx
import type { FC } from "react";
import styles from "./ExerciseCard.module.scss";
import { Icon } from "../Icon";
import { ButtonModal } from "../ButtonModal";
import { ExerciseDetailsContainer } from "@/containers/ExerciseDetailsContainer";

interface Props {
  title: string;
  imageUrl?: string;
}

export const ExerciseCard: FC<Props> = ({ title, imageUrl }) => {
  return (
    <ButtonModal
      modalTitle="Просмотр упражнения"
      renderModalContent={() => (
        <ExerciseDetailsContainer
          title={title}
          description="Test"
          imageUrl={imageUrl}
        />
      )}
    >
      {(openModal) => (
        <div className={styles.card} onClick={openModal} role="button">
          <div className={styles.imageWrapper}>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className={styles.image} />
            ) : (
              <Icon.Dumbbell className={styles.icon} />
            )}
          </div>
          <p className={styles.name} title={title}>
            {title}
          </p>
        </div>
      )}
    </ButtonModal>
  );
};

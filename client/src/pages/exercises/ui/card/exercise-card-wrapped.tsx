import { ButtonModal } from "@/shared/ui/button-modal";
import { ExerciseCard } from "./exercise-card";

export const ExerciseCardWrapped = ({
  title,
  imageUrl,
}: {
  id: number;
  title: string;
  descriptions: string;
  imageUrl?: string;
}) => {
  return (
    <ButtonModal
      modalTitle="Просмотр упражнения"
      renderModalContent={() => <>Упражнение</>}
    >
      {(openModal) => (
        <ExerciseCard title={title} imageUrl={imageUrl} onClick={openModal} />
      )}
    </ButtonModal>
  );
};

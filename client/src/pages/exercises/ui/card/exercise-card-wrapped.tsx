import { ButtonModal } from "@/shared/ui/button-modal";
import { ExerciseCard } from "./exercise-card";
import { ExerciseEditDetails } from "@/widgets/exercise-edit-details/ui";

export const ExerciseCardWrapped = ({
  id,
  title,
  description,
  imageUrl,
}: {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}) => {
  return (
    <ButtonModal
      modalTitle="Просмотр упражнения"
      renderModalContent={(closeModal) => (
        <ExerciseEditDetails
          id={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
          onEdit={closeModal}
        />
      )}
    >
      {(openModal) => (
        <ExerciseCard title={title} imageUrl={imageUrl} onClick={openModal} />
      )}
    </ButtonModal>
  );
};

import { ButtonModal } from "@/shared/ui/button-modal";
import { Icon } from "@/shared/ui/icon";
import { CreateTraining } from "@/widgets/create-training/ui";
import { TrainingsLayout } from "./trainings-layout";
import { useTrainings } from "./use-trainings";
import { TrainingCard } from "./card";

export const TrainingsPage = () => {
  const { trainings } = useTrainings();

  return (
    <TrainingsLayout>
      <TrainingsLayout.Actions>
        <ButtonModal
          startIcon={<Icon.Add />}
          modalTitle="Добавить тренировку"
          renderModalContent={(closeModal) => (
            <CreateTraining onCancel={closeModal} onSubmit={closeModal} />
          )}
        >
          Добавить
        </ButtonModal>
      </TrainingsLayout.Actions>
      <TrainingsLayout.List>
        {trainings.map((item) => (
          <TrainingCard
            key={item.id}
            id={item.id}
            title={item.title}
            exercises={item.exercises}
          />
        ))}
      </TrainingsLayout.List>
    </TrainingsLayout>
  );
};

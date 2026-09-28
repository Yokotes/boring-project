import { ButtonModal } from "@/shared/ui/button-modal";
import { TrainingsLayout } from "./trainings-layout";
import { Icon } from "@/shared/ui/icon";
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
          renderModalContent={() => <>Контент модалки</>}
        >
          Добавить
        </ButtonModal>
      </TrainingsLayout.Actions>
      <TrainingsLayout.List>
        {trainings.map((item) => (
          <TrainingCard
            key={item.id}
            title={item.title}
            exercises={item.exercises}
          />
        ))}
      </TrainingsLayout.List>
    </TrainingsLayout>
  );
};

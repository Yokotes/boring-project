import type { ListTraining } from "@/entities/training/model";
import { GoToButton, TrainingCardLayout } from "./training-card-layout";
import { TrainingCardExercise } from "./exercise";
import { useRouter } from "@/shared/lib/router";

export const TrainingCard = ({
  id,
  title,
  exercises,
}: {
  id: number;
  title: string;
  exercises: ListTraining["exercises"];
}) => {
  const { goToPage } = useRouter();

  return (
    <TrainingCardLayout>
      <TrainingCardLayout.Header>
        <TrainingCardLayout.Title>{title}</TrainingCardLayout.Title>
        <GoToButton onClick={() => goToPage(`/trainings/${id}`)}>
          Перейти
        </GoToButton>
      </TrainingCardLayout.Header>
      <TrainingCardLayout.List>
        {exercises.map((item) => (
          <TrainingCardExercise
            key={item.id}
            title={item.title}
            reps={item.reps}
            imageUrl={item.imageUrl}
          />
        ))}
      </TrainingCardLayout.List>
    </TrainingCardLayout>
  );
};

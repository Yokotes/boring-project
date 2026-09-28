import type { ListTraining } from "@/entities/training/model";
import { TrainingCardLayout } from "./training-card-layout";
import { TrainingCardExercise } from "./exercise";

export const TrainingCard = ({
  title,
  exercises,
}: {
  title: string;
  exercises: ListTraining["exercises"];
}) => {
  return (
    <TrainingCardLayout>
      <TrainingCardLayout.Title>{title}</TrainingCardLayout.Title>
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

import { Show } from "@/shared/ui/show";
import { Chip } from "@/shared/ui/chip";
import { formatReps } from "@/entities/training/lib";
import { TrainingCardExerciseLayout } from "./training-card-exercise-layout";

export const TrainingCardExercise = ({
  title,
  reps,
  imageUrl,
}: {
  title: string;
  reps: number[];
  imageUrl?: string;
}) => {
  return (
    <TrainingCardExerciseLayout>
      <TrainingCardExerciseLayout.ImageWrapper>
        <Show when={!!imageUrl}>
          <TrainingCardExerciseLayout.Image src={imageUrl} alt={title} />
        </Show>
        <Show when={!imageUrl}>
          <TrainingCardExerciseLayout.Placeholder />
        </Show>
      </TrainingCardExerciseLayout.ImageWrapper>
      <TrainingCardExerciseLayout.Title>
        {title}
      </TrainingCardExerciseLayout.Title>
      <Chip title="Подходы и повторения">{formatReps(reps)}</Chip>
    </TrainingCardExerciseLayout>
  );
};

import { Show } from "@/shared/ui/show";
import { ExerciseCardLayout } from "./exercise-card-layout";

export const ExerciseCard = ({
  title,
  imageUrl,
  onClick,
}: {
  title: string;
  imageUrl?: string;
  onClick?: () => void;
}) => {
  return (
    <ExerciseCardLayout onClick={onClick}>
      <ExerciseCardLayout.ImageWrapper>
        <Show when={!!imageUrl}>
          <ExerciseCardLayout.Image src={imageUrl} alt={title} />
        </Show>
        <Show when={!imageUrl}>
          <ExerciseCardLayout.DumbellIcon />
        </Show>
      </ExerciseCardLayout.ImageWrapper>
      <ExerciseCardLayout.Title>{title}</ExerciseCardLayout.Title>
    </ExerciseCardLayout>
  );
};

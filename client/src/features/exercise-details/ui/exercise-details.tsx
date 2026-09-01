import { Show } from "@/shared/ui/show";
import { ExerciseDetailsLayout } from "./exercise-details-layout";
import type { ReactNode } from "react";

export const ExerciseDetails = ({
  title,
  description,
  imageUrl,
  actions,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  actions?: ReactNode;
}) => {
  return (
    <ExerciseDetailsLayout>
      <ExerciseDetailsLayout.ImageWrapper>
        <Show when={!!imageUrl}>
          <ExerciseDetailsLayout.Image src={imageUrl} alt={title} />
        </Show>
        <Show when={!imageUrl}>
          <ExerciseDetailsLayout.DumbellIcon />
        </Show>
      </ExerciseDetailsLayout.ImageWrapper>
      <ExerciseDetailsLayout.Content>
        <ExerciseDetailsLayout.Title>{title}</ExerciseDetailsLayout.Title>
        <ExerciseDetailsLayout.Description>
          {description}
        </ExerciseDetailsLayout.Description>
      </ExerciseDetailsLayout.Content>
      <Show when={!!actions}>
        <ExerciseDetailsLayout.Actions>{actions}</ExerciseDetailsLayout.Actions>
      </Show>
    </ExerciseDetailsLayout>
  );
};

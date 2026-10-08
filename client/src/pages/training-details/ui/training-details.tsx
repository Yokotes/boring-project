import { useRouter } from "@/shared/lib/router";
import { useTrainingDetails } from "../view-model/use-training-details";
import { TrainingDetailsLayout } from "./training-details-layout";

export const TrainingDetails = () => {
  const { params } = useRouter();
  const { training } = useTrainingDetails(Number(params!.id));

  return (
    <TrainingDetailsLayout>
      <TrainingDetailsLayout.Header>
        <TrainingDetailsLayout.Title>
          {training?.title}
        </TrainingDetailsLayout.Title>
      </TrainingDetailsLayout.Header>
    </TrainingDetailsLayout>
  );
};

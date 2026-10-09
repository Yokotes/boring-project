import { useRouter } from "@/shared/lib/router";
import { useTrainingDetails } from "../view-model/use-training-details";
import { BackButton, TrainingDetailsLayout } from "./training-details-layout";
import { SetsTable } from "./table";

export const TrainingDetails = () => {
  const { params } = useRouter();
  const { tableView, title } = useTrainingDetails(Number(params!.id));

  if (!tableView) return null;

  return (
    <TrainingDetailsLayout>
      <TrainingDetailsLayout.Header>
        <BackButton>← Тренировки</BackButton>
        <TrainingDetailsLayout.Title>{title}</TrainingDetailsLayout.Title>
      </TrainingDetailsLayout.Header>
      <TrainingDetailsLayout.Card>
        <TrainingDetailsLayout.Scroll>
          <SetsTable training={tableView} />
        </TrainingDetailsLayout.Scroll>
      </TrainingDetailsLayout.Card>
    </TrainingDetailsLayout>
  );
};

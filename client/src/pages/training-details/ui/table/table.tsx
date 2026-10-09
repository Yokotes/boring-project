import { Show } from "@/shared/ui/show";
import { Icon } from "@/shared/ui/icon";
import { Chip } from "@/shared/ui/chip";
import type { TrainingTableView } from "@/entities/training/model";
import { SetsTableLayout, ThumbImage } from "./table-layout";

export const SetsTable = ({ training }: { training: TrainingTableView }) => {
  return (
    <SetsTableLayout setsLength={training.headers.length}>
      <SetsTableLayout.THead>
        <SetsTableLayout.THeadTitle>
          {training.title}
        </SetsTableLayout.THeadTitle>
        {training.headers.map((header) => (
          <SetsTableLayout.TH key={header}>{header}</SetsTableLayout.TH>
        ))}
        <SetsTableLayout.TH>Всего</SetsTableLayout.TH>
      </SetsTableLayout.THead>
      <SetsTableLayout.TBody>
        {training.rows.map((row) => (
          <SetsTableLayout.TRow key={row.id}>
            <SetsTableLayout.THTitleCell>
              <SetsTableLayout.TitleContent>
                <SetsTableLayout.Thumb>
                  <Show when={!!row.imageUrl}>
                    <ThumbImage src={row.imageUrl} alt={row.title} />
                  </Show>
                  <Show when={!row.imageUrl}>
                    <Icon.Dumbbell />
                  </Show>
                </SetsTableLayout.Thumb>
                <SetsTableLayout.Title>{row.title}</SetsTableLayout.Title>
              </SetsTableLayout.TitleContent>
            </SetsTableLayout.THTitleCell>
            {row.reps.map((count) => (
              <SetsTableLayout.TDCell>
                <Chip>{count}</Chip>
              </SetsTableLayout.TDCell>
            ))}
            <SetsTableLayout.TDRowTotal>
              {row.totalReps}
            </SetsTableLayout.TDRowTotal>
          </SetsTableLayout.TRow>
        ))}
      </SetsTableLayout.TBody>
      <SetsTableLayout.TFoot>
        <SetsTableLayout.THFootLabel>
          Повторов в подходе
        </SetsTableLayout.THFootLabel>
        {training.totalRepsArr.map((item) => (
          <SetsTableLayout.TDFootCell>{item}</SetsTableLayout.TDFootCell>
        ))}
        <SetsTableLayout.TDFootTotal>
          {training.total}
        </SetsTableLayout.TDFootTotal>
      </SetsTableLayout.TFoot>
    </SetsTableLayout>
  );
};

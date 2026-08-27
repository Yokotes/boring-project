import { Show } from "@/shared/ui/show";
import { ExercisesLayout } from "./exercises-layout";
import { useExercises } from "./use-exercises";
import { ButtonModal } from "@/shared/ui/button-modal";
import { Icon } from "@/shared/ui/icon";
import { DebouncedTextField } from "@/shared/ui/debounced-text-field";

export const ExercisesPage = () => {
  const { exercises } = useExercises();

  return (
    <ExercisesLayout>
      <ExercisesLayout.Search>
        <DebouncedTextField placeholder="Поиск" />
      </ExercisesLayout.Search>

      <ExercisesLayout.Content>
        <ExercisesLayout.Actions>
          <ButtonModal
            startIcon={<Icon.Add />}
            modalTitle="Добавить упражнение"
            renderModalContent={() => <>Add Exercise Form</>}
          >
            Добавить
          </ButtonModal>
        </ExercisesLayout.Actions>

        <Show when={exercises.length > 0}>
          <ExercisesLayout.Cards>Cards</ExercisesLayout.Cards>
        </Show>

        <Show when={exercises.length === 0}>
          <ExercisesLayout.Empty>Упражнений не найдено</ExercisesLayout.Empty>
        </Show>
      </ExercisesLayout.Content>
    </ExercisesLayout>
  );
};

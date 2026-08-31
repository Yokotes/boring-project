import { ExercisesLayout } from "./exercises-layout";
import { useExercises } from "./use-exercises";
import { Show } from "@/shared/ui/show";
import { ButtonModal } from "@/shared/ui/button-modal";
import { Icon } from "@/shared/ui/icon";
import { DebouncedTextField } from "@/shared/ui/debounced-text-field";
import { CreateExercise } from "@/features/create-exercise/ui";
import { ExerciseCardWrapped } from "./card";

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
            renderModalContent={(closeModal) => (
              <CreateExercise onCancel={closeModal} onSubmit={closeModal} />
            )}
          >
            Добавить
          </ButtonModal>
        </ExercisesLayout.Actions>

        <Show when={exercises.length > 0}>
          <ExercisesLayout.Cards>
            {exercises.map((exercise) => (
              <ExerciseCardWrapped
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                descriptions={exercise.description}
                imageUrl={exercise.imageUrl}
              />
            ))}
          </ExercisesLayout.Cards>
        </Show>

        <Show when={exercises.length === 0}>
          <ExercisesLayout.Empty>Упражнений не найдено</ExercisesLayout.Empty>
        </Show>
      </ExercisesLayout.Content>
    </ExercisesLayout>
  );
};

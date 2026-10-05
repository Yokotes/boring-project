import { Icon } from "@/shared/ui/icon";
import {
  AddExerciseButton,
  AddSetButton,
  RemoveSetButton,
  SetsFieldLayout,
} from "./sets-field-layout";
import { SetsFieldExercise } from "./exercise";
import {
  useFieldArray,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import type { TrainingFields } from "@/entities/training/model";
import { ButtonModal } from "@/shared/ui/button-modal";
import { SelectExercise } from "@/features/select-exercise/ui";

export const SetsField = ({
  control,
  register,
}: {
  control: Control<TrainingFields>;
  register: UseFormRegister<TrainingFields>;
}) => {
  const {
    fields: sets,
    remove: removeSet,
    append: appendSet,
  } = useFieldArray({ control, name: "sets" });

  return (
    <SetsFieldLayout>
      {sets.map((_, index) => (
        <SetsFieldLayout.Set key={index}>
          <SetsFieldLayout.SetHeader>
            <SetsFieldLayout.SetTitle>
              Подход {index + 1}
            </SetsFieldLayout.SetTitle>
            <RemoveSetButton onClick={() => removeSet(index)}>
              <Icon.Trash />
            </RemoveSetButton>
          </SetsFieldLayout.SetHeader>
          <SetsFieldLayout.Exercises>
            <Exercises setIndex={index} control={control} register={register} />
          </SetsFieldLayout.Exercises>
        </SetsFieldLayout.Set>
      ))}
      <AddSetButton onClick={() => appendSet({ exercises: [] })}>
        <Icon.Add />
        Добавить подход
      </AddSetButton>
    </SetsFieldLayout>
  );
};

const Exercises = ({
  setIndex,
  control,
  register,
}: {
  setIndex: number;
  control: Control<TrainingFields>;
  register: UseFormRegister<TrainingFields>;
}) => {
  const {
    fields: exercises,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `sets.${setIndex}.exercises`,
  });

  return (
    <>
      {exercises.map((item, index) => (
        <SetsFieldExercise
          key={`${item.id}.${index}`}
          title={item.title}
          onRemove={() => remove(index)}
          repsProps={register(`sets.${setIndex}.exercises.${index}.reps`)}
        />
      ))}
      <ButtonModal
        modalTitle="Выбрать упражнение"
        renderModalContent={(closeModal) => (
          <SelectExercise
            onCancel={closeModal}
            onSubmit={({ exercise }) => {
              append({ id: exercise.value, title: exercise.label, reps: 1 });
              closeModal();
            }}
          />
        )}
      >
        {(openModal) => (
          <AddExerciseButton onClick={openModal}>
            <Icon.Add />
            Добавить упражнение
          </AddExerciseButton>
        )}
      </ButtonModal>
    </>
  );
};

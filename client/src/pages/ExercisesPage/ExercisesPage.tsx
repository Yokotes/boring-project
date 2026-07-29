import { useCallback, useEffect, useState, type FC } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SearchForm } from "@/components/SearchForm";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Icon } from "@/components/Icon";
import { ButtonModal } from "@/components/ButtonModal";
import { CreateExerciseContainer } from "@/containers/CreateExerciseContainer";
import styles from "./ExercisesPage.module.scss";
import { useLazyGetAllExercisesQuery } from "@/app/api";
import type { Exercise } from "@/app/types";

export const ExercisesPage: FC = () => {
  const [fetchExercises, { data = [] }] = useLazyGetAllExercisesQuery();
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleSearch = useCallback(
    (val: string) => {
      setExercises(data.filter((item) => item.title.includes(val)));
    },
    [data],
  );

  const handleFormSubmit = (closeModal: () => void) => () => {
    closeModal();
    fetchExercises();
  };

  // TODO: Come up with another solution
  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  useEffect(() => {
    setExercises(data);
  }, [data]);

  return (
    <PageLayout className={styles.page}>
      <div className={styles.panel}>
        <div className={styles.searchForm}>
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.addBtnContainer}>
          <ButtonModal
            startIcon={<Icon.Add />}
            modalTitle="Добавить упражнение"
            renderModalContent={(closeModal) => (
              <CreateExerciseContainer
                onCancel={closeModal}
                onSubmit={handleFormSubmit(closeModal)}
              />
            )}
          >
            Добавить
          </ButtonModal>
        </div>
        {/* TODO: Add fancy loader */}
        {exercises.length < 1 ? (
          <div className={styles.empty}>Упражнений не найдено</div>
        ) : (
          <div className={styles.cards}>
            {exercises.map((item) => (
              <ExerciseCard
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

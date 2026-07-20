import { useCallback, useState, type FC } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SearchForm } from "@/components/SearchForm";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import styles from "./ExercisesPage.module.scss";

const EXERCISES_LIST_MOCK = [
  { name: "Тестовое упражнение" },
  { name: "123" },
  { name: "456" },
  { name: "768" },
];

export const ExercisesPage: FC = () => {
  // TODO: Change when they will be fetching from backend
  const [exercises, setExercises] = useState(EXERCISES_LIST_MOCK);

  const handleSearch = useCallback((val: string) => {
    setExercises(EXERCISES_LIST_MOCK.filter((item) => item.name.includes(val)));
  }, []);

  return (
    <PageLayout className={styles.page}>
      <div className={styles.panel}>
        <div className={styles.searchForm}>
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.addBtnContainer}>
          <Button startIcon={<Icon.Add />}>Добавить</Button>
        </div>
        {exercises.length < 1 ? (
          <div className={styles.empty}>Упражнений не найдено</div>
        ) : (
          <div className={styles.cards}>
            {exercises.map((item) => (
              <ExerciseCard key={item.name} name={item.name} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

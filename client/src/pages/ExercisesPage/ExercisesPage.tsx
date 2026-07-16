import type { FC } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SearchForm } from "@/components/SearchForm";
import styles from "./ExercisesPage.module.scss";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export const ExercisesPage: FC = () => {
  return (
    <PageLayout className={styles.page}>
      <div className={styles.panel}>
        <div className={styles.searchForm}>
          <SearchForm />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.addBtnContainer}>
          <Button startIcon={<Icon.Add />}>Добавить</Button>
        </div>
        <div className={styles.cards}>
          <ExerciseCard name="Тестовое упражнение" />
          <ExerciseCard name="Тестовое упражнение" />
          <ExerciseCard name="Тестовое упражнение" />
          <ExerciseCard name="Тестовое упражнение" />
          <ExerciseCard name="Тестовое упражнение" />
        </div>
      </div>
    </PageLayout>
  );
};

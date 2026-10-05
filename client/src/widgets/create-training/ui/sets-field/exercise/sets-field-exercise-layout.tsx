import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./sets-field-exercise.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.exerciseRow}>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <span className={styles.exerciseTitle}>{children}</span>;
};

export const RepsInput = (props: ComponentPropsWithoutRef<"input">) => {
  return <input className={styles.repsInput} type="number" {...props} />;
};

export const RemoveExerciseButton = ({ children }: PropsWithChildren) => {
  return (
    <button className={styles.removeExerciseButton} type="button">
      {children}
    </button>
  );
};

export const SetsFieldExerciseLayout = Object.assign(Layout, {
  Title,
});

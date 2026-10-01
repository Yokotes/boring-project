import type { PropsWithChildren } from "react";
import styles from "./sets-field.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.field}>{children}</div>;
};

const Set = ({ children }: PropsWithChildren) => {
  return <div className={styles.setCard}>{children}</div>;
};

const SetHeader = ({ children }: PropsWithChildren) => {
  return <div className={styles.setHeader}>{children}</div>;
};

const SetTitle = ({ children }: PropsWithChildren) => {
  return <div className={styles.setTitle}>{children}</div>;
};

const Exercises = ({ children }: PropsWithChildren) => {
  return <div className={styles.exercises}>{children}</div>;
};

export const RemoveSetButton = ({ children }: PropsWithChildren) => {
  return (
    <button className={styles.removeSetButton} type="button">
      {children}
    </button>
  );
};

export const AddSetButton = ({ children }: PropsWithChildren) => {
  return (
    <button className={styles.addSetButton} type="button">
      {children}
    </button>
  );
};

export const AddExerciseButton = ({ children }: PropsWithChildren) => {
  return (
    <button className={styles.addExerciseButton} type="button">
      {children}
    </button>
  );
};

export const SetsFieldLayout = Object.assign(Layout, {
  Set,
  SetHeader,
  SetTitle,
  Exercises,
});

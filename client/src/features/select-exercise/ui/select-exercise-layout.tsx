import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./select-exercise.module.scss";

const Layout = ({ children, ...props }: ComponentPropsWithoutRef<"form">) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.actions}>{children}</div>;
};

export const SelectExerciseLayout = Object.assign(Layout, { Actions });

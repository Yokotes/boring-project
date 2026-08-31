import type { PropsWithChildren, SubmitEventHandler } from "react";
import styles from "./create-exercise-form.module.scss";

const Layout = ({
  children,
  onSubmit,
}: PropsWithChildren<{ onSubmit?: SubmitEventHandler }>) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.actions}>{children}</div>;
};

export const CreateExerciseLayout = Object.assign(Layout, { Actions });

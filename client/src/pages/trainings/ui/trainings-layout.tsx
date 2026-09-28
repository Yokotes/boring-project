import type { PropsWithChildren } from "react";
import styles from "./trainings.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.actions}>{children}</div>;
};

const List = ({ children }: PropsWithChildren) => {
  return <div className={styles.list}>{children}</div>;
};

export const TrainingsLayout = Object.assign(Layout, { Actions, List });

import type { PropsWithChildren } from "react";
import styles from "./exercises.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

const Search = ({ children }: PropsWithChildren) => {
  return <div className={styles.search}>{children}</div>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className={styles.content}>{children}</div>;
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.actions}>{children}</div>;
};

const Cards = ({ children }: PropsWithChildren) => {
  return <div className={styles.cards}>{children}</div>;
};

const Empty = ({ children }: PropsWithChildren) => {
  return <div className={styles.empty}>{children}</div>;
};

export const ExercisesLayout = Object.assign(Layout, {
  Search,
  Content,
  Actions,
  Cards,
  Empty,
});

import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./training-card.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.card}>{children}</div>;
};

const Header = ({ children }: PropsWithChildren) => {
  return <div className={styles.header}>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h3 className={styles.title}>{children}</h3>;
};

const List = ({ children }: PropsWithChildren) => {
  return <ul className={styles.list}>{children}</ul>;
};

export const GoToButton = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className={styles.goToBtn} {...props}>
      {children}
    </button>
  );
};

export const TrainingCardLayout = Object.assign(Layout, {
  Header,
  Title,
  List,
});

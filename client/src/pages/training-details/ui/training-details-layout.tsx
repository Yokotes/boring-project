import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./training-details.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

const Header = ({ children }: PropsWithChildren) => {
  return <header className={styles.header}>{children}</header>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.title}>{children}</h1>;
};

const Card = ({ children }: PropsWithChildren) => {
  return <div className={styles.card}>{children}</div>;
};

const Scroll = ({ children }: PropsWithChildren) => {
  return <div className={styles.scroll}>{children}</div>;
};

export const BackButton = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className={styles.back} {...props}>
      {children}
    </button>
  );
};

export const TrainingDetailsLayout = Object.assign(Layout, {
  Header,
  Title,
  Card,
  Scroll,
});

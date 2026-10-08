import type { PropsWithChildren } from "react";
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

export const TrainingDetailsLayout = Object.assign(Layout, { Header, Title });

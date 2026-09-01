import { type PropsWithChildren } from "react";
import styles from "./page-layout.module.scss";

const PageComponent = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

const Sidebar = ({ children }: PropsWithChildren) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

const Logo = ({ children }: PropsWithChildren) => {
  return <div className={styles.logo}>{children}</div>;
};

const Main = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};

const TopBar = ({ children }: PropsWithChildren) => {
  return <header className={styles.topbar}>{children}</header>;
};

const UserSlot = ({ children }: PropsWithChildren) => {
  return <div className={styles.userSlot}>{children}</div>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className={styles.content}>{children}</div>;
};

// For correct type
export const Page = Object.assign(PageComponent, {
  Sidebar,
  Logo,
  Main,
  TopBar,
  UserSlot,
  Content,
});

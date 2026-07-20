import type { FC, ReactNode } from "react";
import { Nav, type NavItem } from "../Nav";
import { UserProfile } from "../UserProfile";
import styles from "./PageLayout.module.scss";

// TODO: Maybe move inside component later
const NAV_ITEMS: NavItem[] = [
  {
    title: "Главная",
    page: "/home",
  },
  {
    title: "Расписания",
    page: "/schedules",
  },
  {
    title: "Упражнения",
    page: "/exercises",
  },
];

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Boring Project</div>

        <Nav items={NAV_ITEMS} />
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.userSlot}>
            <UserProfile />
          </div>
        </header>

        <div className={`${styles.content} ${className ?? ""}`}>{children}</div>
      </main>
    </div>
  );
};

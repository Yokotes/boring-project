import type { FC } from "react";
import styles from "./HomePage.module.scss";
import { UserProfile } from "@/components/UserProfile";
import { Nav } from "@/components/Nav";
import type { NavItemProps } from "@/components/NavItem";
import { TodayTrainingContainer } from "@/containers/TodayTrainingContainer";

// TODO: Later move inside component
const NAV_ITEMS: NavItemProps[] = [
  {
    title: "Главная",
    active: true,
  },
];

export const HomePage: FC = () => {
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

        <div className={styles.content}>
          <TodayTrainingContainer />
        </div>
      </main>
    </div>
  );
};

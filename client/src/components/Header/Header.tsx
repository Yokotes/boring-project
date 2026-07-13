import type { FC } from "react";
import styles from "./Header.module.scss";
import { UserProfile } from "../UserProfile";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1>Boring Project</h1>
      <div>
        <UserProfile />
      </div>
    </div>
  );
};

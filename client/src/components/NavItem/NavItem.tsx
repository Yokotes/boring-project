import { useMemo, type FC } from "react";
import styles from "./NavItem.module.scss";

export interface NavItemProps {
  title: string;
  active?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ title, active }) => {
  const className = useMemo(
    () => `${styles.navItem} ${active ? styles.active : ""}`,
    [active],
  );

  return <button className={className}>{title}</button>;
};

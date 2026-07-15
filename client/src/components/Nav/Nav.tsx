import type { FC } from "react";
import { NavItem, type NavItemProps } from "../NavItem";
import styles from "./Nav.module.scss";

interface Props {
  items: NavItemProps[];
}

export const Nav: FC<Props> = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </nav>
  );
};

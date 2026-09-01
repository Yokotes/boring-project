import { NavItem } from "./nav-item";
import styles from "./nav.module.scss";

export interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export const Nav = ({ items }: { items: NavItem[] }) => {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        // TODO: Maybe merge Nav and NavItem into one component???
        <NavItem
          key={item.title}
          title={item.title}
          url={item.url}
          active={item.isActive}
        />
      ))}
    </nav>
  );
};

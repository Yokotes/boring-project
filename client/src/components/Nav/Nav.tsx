import { useMemo, type FC } from "react";
import { NavItem } from "../NavItem";
import type { Page } from "@/app/types";
import styles from "./Nav.module.scss";
import { useRouter } from "@/pages/Router";

export interface NavItem {
  title: string;
  page: Page;
}

interface Props {
  items: NavItem[];
}

export const Nav: FC<Props> = ({ items }) => {
  const { page } = useRouter();
  const activeItem = useMemo(
    () => items.find((item) => item.page === page),
    [page, items],
  );

  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          page={item.page}
          // TODO: temporary solution, find better way
          active={activeItem?.title === item.title}
        />
      ))}
    </nav>
  );
};

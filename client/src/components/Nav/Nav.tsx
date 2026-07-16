import { useMemo, type FC } from "react";
import { NavItem } from "../NavItem";
import { useSelector } from "react-redux";
import type { Page } from "@/app/types";
import { currentPageSelector } from "@/app/selectors";
import styles from "./Nav.module.scss";

export interface NavItem {
  title: string;
  page: Page;
}

interface Props {
  items: NavItem[];
}

export const Nav: FC<Props> = ({ items }) => {
  const currentPage = useSelector(currentPageSelector);
  const activeItem = useMemo(
    () => items.find((item) => item.page === currentPage),
    [currentPage, items],
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

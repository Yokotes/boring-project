import { useMemo, type FC } from "react";
import type { Page } from "@/app/types";
import styles from "./NavItem.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "@/app/slices";

export interface NavItemProps {
  title: string;
  page: Page;
  active?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ title, page, active }) => {
  const className = useMemo(
    () => `${styles.navItem} ${active ? styles.active : ""}`,
    [active],
  );
  const dispatch = useDispatch();

  const handleGoToPage = () => {
    if (active) return;

    dispatch(setPage(page));
  };

  return (
    <button className={className} onClick={handleGoToPage}>
      {title}
    </button>
  );
};

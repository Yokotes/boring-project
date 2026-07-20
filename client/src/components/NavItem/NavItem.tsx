import { useMemo, type FC } from "react";
import type { Page } from "@/app/types";
import styles from "./NavItem.module.scss";
import { useRouter } from "@/pages/Router";

export interface NavItemProps {
  title: string;
  page: Page;
  active?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ title, page, active }) => {
  const { setPage } = useRouter();
  const className = useMemo(
    () => `${styles.navItem} ${active ? styles.active : ""}`,
    [active],
  );

  const handleGoToPage = () => {
    if (active) return;

    setPage(page);
  };

  return (
    <button className={className} onClick={handleGoToPage}>
      {title}
    </button>
  );
};

import { useMemo } from "react";
import styles from "./nav.module.scss";

export interface Props {
  title: string;
  url: string;
  active?: boolean;
}

export const NavItem = ({ title, url, active }: Props) => {
  const className = useMemo(
    () => `${styles.navItem} ${active ? styles.active : ""}`,
    [active],
  );

  const handleGoToPage = () => {
    if (active) return;

    // history.pushState(null, "", url);
    document.location = url;
  };

  return (
    <button className={className} onClick={handleGoToPage}>
      {title}
    </button>
  );
};

import { useMemo } from "react";
import styles from "./nav.module.scss";
import { useRouter } from "@/shared/lib/router";

export interface Props {
  title: string;
  url: string;
  active?: boolean;
}

export const NavItem = ({ title, url, active }: Props) => {
  const { goToPage } = useRouter();
  const className = useMemo(
    () => `${styles.navItem} ${active ? styles.active : ""}`,
    [active],
  );

  const handleGoToPage = () => {
    if (!active) goToPage(url);
  };

  return (
    <button className={className} onClick={handleGoToPage}>
      {title}
    </button>
  );
};

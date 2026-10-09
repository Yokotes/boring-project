import styles from "./chip.module.scss";

export const Chip = ({
  children,
  title,
}: {
  children: string;
  title?: string;
}) => {
  return (
    <span title={title} className={styles.chip}>
      {children}
    </span>
  );
};

import styles from "./not-found.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Страница не найдена</h1>
    </div>
  );
};

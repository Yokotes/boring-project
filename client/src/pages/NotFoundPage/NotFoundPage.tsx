import { Button } from "@/components/Button";
import styles from "./NotFoundPage.module.scss";
import { useRouter } from "../Router";

export const NotFoundPage = () => {
  const { setPage } = useRouter();

  return (
    <div className={styles.page}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Страница не найдена</h1>
      <Button onClick={() => setPage("/home")}>На главную</Button>
    </div>
  );
};

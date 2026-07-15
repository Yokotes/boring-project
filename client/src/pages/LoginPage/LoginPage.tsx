import { LoginContainer } from "@/containers/LoginContainer";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.page}>
      <LoginContainer />
    </div>
  );
};

import { LoginContainer } from "@/containers/LoginContainer";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <LoginContainer />
      </div>
    </div>
  );
};

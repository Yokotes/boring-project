import { LoginContainer } from "@/containers/LoginContainer";
import styles from "./LoginPage.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "@/app/slices";

export const LoginPage = () => {
  const dispatch = useDispatch();

  // TODO: Get rid of it, when redux query will be plugged in
  const handleSubmit = () => {
    dispatch(setPage("app"));
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <LoginContainer onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

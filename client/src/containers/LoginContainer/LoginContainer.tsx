import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAuthMutation } from "@/app/apis";
import { setPage, setUser } from "@/app/slices";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import styles from "./LoginContainer.module.scss";

interface LoginFormFields {
  login: string;
  password: string;
}

export const LoginContainer: FC = () => {
  const { register, handleSubmit } = useForm<LoginFormFields>({});
  const dispatch = useDispatch();
  const [auth] = useAuthMutation();

  const submit = async (values: LoginFormFields) => {
    const { data, error } = await auth(values);
    if (error) {
      // TODO: Replace with some fancy popup
      alert((error as FetchBaseQueryError).data);
      return;
    }

    if (data) {
      dispatch(setUser(data.user));
      dispatch(setPage("app"));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Авторизация</h2>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <TextField
            placeholder="Логин"
            {...register("login", { required: true })}
          />
          <TextField
            type="password"
            placeholder="Пароль"
            {...register("password", { required: true })}
          />
          <div className={styles.buttonContainer}>
            <Button>Войти</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

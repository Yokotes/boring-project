import type { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginContainer.module.scss";
import { useAuthMutation } from "@/app/apis";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { setPage, setUser } from "@/app/slices";

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
      <h2 className={styles.title}>Sign In</h2>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Login"
            {...register("login", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

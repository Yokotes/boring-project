import type { FC } from "react";
import { useForm } from "react-hook-form";
import { EMPTY_FUNCTION } from "@/consts";
import styles from "./LoginContainer.module.scss";

interface LoginContainerProps {
  onSubmit?: () => void;
}

interface LoginFormFields {
  login: string;
  password: string;
}

export const LoginContainer: FC<LoginContainerProps> = ({
  onSubmit = EMPTY_FUNCTION,
}) => {
  const { register, handleSubmit } = useForm<LoginFormFields>({});

  const submit = (values: LoginFormFields) => {
    console.log(values);
    onSubmit();
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

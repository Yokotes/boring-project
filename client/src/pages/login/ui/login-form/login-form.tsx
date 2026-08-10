import { LoginLayout } from "../login-layout";
import { Button } from "@/shared/ui/button";
import { TextField } from "@/shared/ui/text-field";
import type { LoginFields } from "../../model/fields";
import { useLoginForm } from "./use-login-form";

interface Props {
  onSubmit?: (vals: LoginFields) => void;
}

export const LoginForm = ({ onSubmit }: Props) => {
  const { submitHandler, fieldProps } = useLoginForm(onSubmit);

  return (
    <LoginLayout.Form onSubmit={submitHandler}>
      <TextField placeholder="Логин" {...fieldProps.login} />
      <TextField
        type="password"
        placeholder="Пароль"
        {...fieldProps.password}
      />
      <LoginLayout.Actions>
        <Button>Войти</Button>
      </LoginLayout.Actions>
    </LoginLayout.Form>
  );
};

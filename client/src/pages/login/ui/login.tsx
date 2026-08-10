import { useRouter } from "@/shared/lib/router";
import { LoginForm } from "./login-form";
import { LoginLayout } from "./login-layout";

export const LoginPage = () => {
  const { goToPage } = useRouter();

  return (
    <LoginLayout>
      <LoginLayout.Content>
        <LoginLayout.Title>Авторизация</LoginLayout.Title>
        <LoginLayout.FormWrapper>
          <LoginForm onSubmit={() => goToPage("/")} />
        </LoginLayout.FormWrapper>
      </LoginLayout.Content>
    </LoginLayout>
  );
};

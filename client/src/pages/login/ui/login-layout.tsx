import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./login.module.scss";

const Content = ({ children }: PropsWithChildren) => {
  return <div className={styles.content}>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const FormWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.formWrapper}>{children}</div>;
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.buttonContainer}>{children}</div>;
};

const Form = ({ children, ...props }: ComponentPropsWithoutRef<"form">) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

export const LoginLayout = Object.assign(Layout, {
  Content,
  Title,
  FormWrapper,
  Actions,
  Form,
});

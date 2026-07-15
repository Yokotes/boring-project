import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: FC<Props> = ({
  children,
  className,
  variant = "primary",
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

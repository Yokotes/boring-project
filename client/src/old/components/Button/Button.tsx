import type { ComponentPropsWithoutRef, FC, JSX, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  startIcon?: JSX.Element;
}

export const Button: FC<Props> = ({
  children,
  className,
  startIcon,
  variant = "primary",
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
    >
      <>
        {startIcon}
        {children}
      </>
    </button>
  );
};

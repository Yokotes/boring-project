import type { ComponentPropsWithoutRef, JSX } from "react";
import styles from "./button.module.scss";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "outlined";
  startIcon?: JSX.Element;
}

export const Button = ({
  children,
  className,
  startIcon,
  variant = "primary",
  ...otherProps
}: Props) => {
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

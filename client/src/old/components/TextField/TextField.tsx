import type { ComponentPropsWithRef, FC } from "react";
import styles from "./TextField.module.scss";

interface Props extends ComponentPropsWithRef<"input"> {
  type?: "text" | "password";
}

export const TextField: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <input {...otherProps} className={`${styles.textField} ${className}`} />
  );
};

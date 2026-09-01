import type { ComponentPropsWithRef, FC } from "react";
import styles from "./text-field.module.scss";

interface Props extends ComponentPropsWithRef<"input"> {
  type?: "text" | "password";
  error?: string;
}

export const TextField: FC<Props> = ({
  className = "",
  error,
  ...otherProps
}) => {
  return (
    <div>
      <input
        {...otherProps}
        className={`${styles.textField} ${className} ${error ? styles.error : ""}`}
      />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

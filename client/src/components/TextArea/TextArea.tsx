import type { ComponentPropsWithRef, FC } from "react";
import styles from "./TextArea.module.scss";

export const TextArea: FC<ComponentPropsWithRef<"textarea">> = (props) => {
  return <textarea className={styles.textarea} {...props} />;
};

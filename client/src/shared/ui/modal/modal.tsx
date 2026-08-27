import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../icon";
import styles from "./modal.module.scss";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}>) => {
  return (
    isOpen &&
    createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <button className={styles.closeButton} onClick={onClose}>
              <Icon.Close />
            </button>
          </div>

          <div className={styles.content}>{children}</div>
        </div>
      </div>,
      document.body,
    )
  );
};

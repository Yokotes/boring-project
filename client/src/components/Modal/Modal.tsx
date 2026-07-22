import { type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ isOpen, onClose, children, title }) => {
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

import { type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    isOpen &&
    createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon.Close />
          </button>

          <div className={styles.content}>{children}</div>
        </div>
      </div>,
      document.body,
    )
  );
};

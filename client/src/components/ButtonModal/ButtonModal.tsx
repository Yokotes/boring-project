import { useState, type ComponentProps, type FC, type ReactNode } from "react";
import { Modal } from "../Modal";
import { Button } from "../Button";

type RenderButtonChildrenFn = (openModal: () => void) => ReactNode;

interface Props extends Omit<ComponentProps<typeof Button>, "children"> {
  children: RenderButtonChildrenFn | ReactNode;
  renderModalContent: (closeModal: () => void) => ReactNode;
}

export const ButtonModal: FC<Props> = ({
  children,
  renderModalContent,
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {typeof children === "function" ? (
        children(openModal)
      ) : (
        <Button {...otherProps} onClick={openModal}>
          {children}
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {renderModalContent(closeModal)}
      </Modal>
    </>
  );
};

import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./exercise-card.module.scss";
import { Icon } from "@/shared/ui/icon";

const Layout = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <div className={styles.card} role="button" onClick={onClick}>
      {children}
    </div>
  );
};

const ImageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.imageWrapper}>{children}</div>;
};

const Image = (props: ComponentPropsWithoutRef<"img">) => {
  return <img className={styles.image} {...props} />;
};

const DumbellIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return <Icon.Dumbbell className={styles.icon} {...props} />;
};

const Title = ({ children }: { children: string }) => {
  return (
    <p className={styles.title} title={children}>
      {children}
    </p>
  );
};

export const ExerciseCardLayout = Object.assign(Layout, {
  ImageWrapper,
  Image,
  DumbellIcon,
  Title,
});

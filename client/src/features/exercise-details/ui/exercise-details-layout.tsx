import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./exercise-details.module.scss";
import { Icon } from "@/shared/ui/icon";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.layout}>{children}</div>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className={styles.content}>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className={styles.description}>{children}</p>;
};

const ImageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.imageWrapper}>{children}</div>;
};

const DumbellIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return <Icon.Dumbbell className={styles.image} {...props} />;
};

const Image = (props: ComponentPropsWithoutRef<"img">) => {
  return <img className={styles.image} {...props} />;
};

const Actions = ({ children }: PropsWithChildren) => {
  return <div className={styles.actions}>{children}</div>;
};

export const ExerciseDetailsLayout = Object.assign(Layout, {
  Content,
  Title,
  Description,
  ImageWrapper,
  DumbellIcon,
  Image,
  Actions,
});

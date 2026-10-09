import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./training-card-exercise.module.scss";
import { Icon } from "@/shared/ui/icon";

const Layout = ({ children }: PropsWithChildren) => {
  return <li className={styles.exercise}>{children}</li>;
};

const ImageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.imageWrapper}>{children}</div>;
};

const Image = (props: ComponentPropsWithoutRef<"img">) => {
  return <img className={styles.image} {...props} />;
};

const Placeholder = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <div className={styles.placeholder}>
      <Icon.Dumbbell {...props} />
    </div>
  );
};

const Title = ({ children }: { children: string }) => {
  return (
    <p className={styles.title} title={children}>
      {children}
    </p>
  );
};

export const TrainingCardExerciseLayout = Object.assign(Layout, {
  ImageWrapper,
  Placeholder,
  Image,
  Title,
});

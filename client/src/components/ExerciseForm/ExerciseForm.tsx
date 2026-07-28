import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "../TextField";
import { TextArea } from "../TextArea";
import styles from "./ExerciseForm.module.scss";
import { ImagePreviewField } from "../ImagePreviewField";

export interface ExerciseFields {
  title: string;
  description: string;
  imageUrl?: string;
}

interface Props {
  fields?: Partial<ExerciseFields>;
  onSubmit: (vals: ExerciseFields) => void;
  footer: JSX.Element;
}

export const ExerciseForm: FC<Props> = ({ fields, onSubmit, footer }) => {
  const { register, handleSubmit } = useForm<ExerciseFields>({
    defaultValues: fields,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ImagePreviewField {...register("imageUrl")} />
      <TextField placeholder="Название" {...register("title")} />
      <TextArea placeholder="Описание" {...register("description")} />
      {footer}
    </form>
  );
};

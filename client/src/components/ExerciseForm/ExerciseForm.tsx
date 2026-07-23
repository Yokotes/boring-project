import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "../TextField";
import { TextArea } from "../TextArea";
import { ImageUpload } from "../ImageUpload";
import styles from "./ExerciseForm.module.scss";

export interface ExerciseFields {
  title: string;
  description: string;
  image: File;
}

interface Props {
  fields?: Partial<ExerciseFields>;
  onSubmit: (vals: ExerciseFields) => void;
  renderFooter?: () => JSX.Element;
}

export const ExerciseForm: FC<Props> = ({ fields, onSubmit, renderFooter }) => {
  const { register, handleSubmit } = useForm<ExerciseFields>({
    defaultValues: fields,
  });

  const uploadProps = register("image");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ImageUpload
        onFileSelect={(file) => {
          // TODO: Find more fancy solution
          uploadProps.onChange({
            target: { value: file, name: uploadProps.name },
          });
        }}
        // TODO: Pizdec... Come up something later. MAX PRIORITY.
        previewUrl={fields?.image && URL.createObjectURL(fields.image)}
      />
      <TextField placeholder="Название" {...register("title")} />
      <TextArea placeholder="Описание" {...register("description")} />
      {renderFooter?.()}
    </form>
  );
};

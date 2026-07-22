import {
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import styles from "./ImageUpload.module.scss";
import { Icon } from "../Icon";

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  previewUrl?: string;
}

export const ImageUpload = ({ onFileSelect, previewUrl }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [value, setValue] = useState(previewUrl);

  const onChange = (file?: File) => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    setValue(url);
    onFileSelect(file);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setValue(undefined);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    onChange(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onChange(file);
  };

  return (
    <div
      className={`${styles.dropzone} ${isDragging ? styles.dragging : ""}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={handleChange}
      />

      {value ? (
        <>
          <img src={value} alt="Превью" className={styles.preview} />
          <button className={styles.deleteButton} onClick={handleDelete}>
            <Icon.Trash />
          </button>
        </>
      ) : (
        <div className={styles.placeholder}>
          <Icon.Upload />
          <span className={styles.text}>
            Перетащите изображение или нажмите, чтобы выбрать
          </span>
        </div>
      )}
    </div>
  );
};

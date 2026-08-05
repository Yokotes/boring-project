import {
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithRef,
  type FC,
} from "react";
import { TextField } from "../TextField";
import styles from "./ImagePreviewField.module.scss";

// TODO: Maybe move to consts folder?
const DEBOUNCE_TIME = 300;

export const ImagePreviewField: FC<
  Omit<ComponentPropsWithRef<"input">, "type"> & { defaultPreviewUrl?: string }
> = ({ defaultPreviewUrl = "", ...props }) => {
  const timeoutId = useRef<number>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string>(defaultPreviewUrl);

  const handleDebouncedChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      const val = e.target.value;

      setPreviewUrl(val);
    }, DEBOUNCE_TIME);
  };

  return (
    <div className={styles.container}>
      <TextField
        {...props}
        placeholder="Адрес картинки"
        onChange={handleDebouncedChange}
      />
      <div className={styles.imageContainer}>
        {previewUrl ? (
          <>
            <img src={previewUrl} alt="Превью" className={styles.preview} />
          </>
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.text}>
              Вставьте в вверхнее поле адрес для превью
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

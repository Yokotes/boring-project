import { useRef, type ChangeEvent, type FC } from "react";
import { EMPTY_FUNCTION } from "@/consts";
import { TextField } from "../TextField";
import styles from "./SearchForm.module.scss";

const DEBOUNCE_TIME = 300;

type SearchHandler = (val: string) => void;

interface Props {
  onSearch?: SearchHandler;
}

export const SearchForm: FC<Props> = ({ onSearch = EMPTY_FUNCTION }) => {
  const timeoutId = useRef<number>(undefined);

  const handleDebouncedChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      const val = e.target.value;

      onSearch(val);
    }, DEBOUNCE_TIME);
  };

  return (
    <div className={styles.form}>
      <TextField
        className={styles.input}
        placeholder="Поиск"
        onChange={handleDebouncedChange}
      />
    </div>
  );
};

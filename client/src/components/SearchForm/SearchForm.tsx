import { useRef, type ChangeEventHandler, type FC } from "react";
import { EMPTY_FUNCTION } from "@/consts";
import { TextField } from "../TextField";
import styles from "./SearchForm.module.scss";

const DEBOUNCE_TIME = 300;

type SearchHandler = (val: string) => void;

interface Props {
  onSearch?: SearchHandler;
}

export const SearchForm: FC<Props> = ({ onSearch = EMPTY_FUNCTION }) => {
  // NOTE: To not lose value through rerenders
  const timeoutId = useRef<number>(undefined);

  const handleDebouncedChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      const val = event.target.value;

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

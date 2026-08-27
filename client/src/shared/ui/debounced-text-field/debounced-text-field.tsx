import { useRef, type ChangeEvent, type ComponentProps } from "react";
import { TextField } from "../text-field";

const DEBOUNCE_TIME = 300;

export const DebouncedTextField = ({
  onChange,
  ...otherProps
}: ComponentProps<typeof TextField>) => {
  const timeoutId = useRef<number>(undefined);

  const handleDebouncedChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      onChange?.(e);
    }, DEBOUNCE_TIME);
  };

  return <TextField onChange={handleDebouncedChange} {...otherProps} />;
};

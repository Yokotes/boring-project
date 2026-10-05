import { useRef, useState } from "react";
import styles from "./select.module.scss";
import { createPortal } from "react-dom";

type Option = {
  label: string;
  value: number;
};

export const Select = ({
  options,
  value,
  placeholder = "Выберите...",
  onChange,
}: {
  options: Option[];
  value?: Option;
  placeholder?: string;
  onChange?: (val: Option) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(value);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((val) => !val);

    const rect = selectRef.current?.getBoundingClientRect();

    if (rect) {
      setPosition({
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
      });
    }
  };

  const handleSelect = (val: Option) => {
    setCurrent(val);
    onChange?.(val);
    setIsOpen(false);
  };

  return (
    <div className={styles.select} ref={selectRef}>
      <button
        type="button"
        className={`${styles.control} ${isOpen ? styles.controlOpen : ""}`}
        onClick={handleToggle}
      >
        <span className={current ? styles.value : styles.placeholder}>
          {current ? current.label : placeholder}
        </span>

        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen &&
        createPortal(
          <div
            className={styles.dropdown}
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
            }}
          >
            <ul className={styles.options}>
              {options.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className={`${styles.option} ${current?.value === option.value ? styles.optionActive : ""}`}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
};

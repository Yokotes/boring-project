import type { FC } from "react";
import { TextField } from "../TextField";
import { Button } from "../Button";
import styles from "./SearchForm.module.scss";
import { useForm } from "react-hook-form";

interface SearchFormFields {
  search: string;
}

export const SearchForm: FC = () => {
  const { register, handleSubmit } = useForm<SearchFormFields>({});

  const submit = (vals: SearchFormFields) => {
    console.log(vals);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <TextField
        className={styles.input}
        placeholder="Поиск"
        {...register("search", { required: true })}
      />
      <div>
        <Button>Поиск</Button>
      </div>
    </form>
  );
};

import { object, string } from "zod";

export const validationSchema = object({
  login: string().nonempty("Обязательное поле!"),
  password: string().nonempty("Обязательное поле!"),
});

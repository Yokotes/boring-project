import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFields } from "../model/fields";
import { validationSchema } from "../model/validation";
import { useMutation } from "@tanstack/react-query";
import { authMutationFn } from "@/shared/api";

export const useLoginForm = (onSubmit?: (vals: LoginFields) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(validationSchema),
  });
  const { mutate: auth } = useMutation({
    mutationKey: ["auth"],
    mutationFn: authMutationFn,
  });

  const submitHandler = (vals: LoginFields) => {
    auth(vals);
    onSubmit?.(vals);
  };

  return {
    submitHandler: handleSubmit(submitHandler),
    fieldProps: {
      login: { ...register("login"), error: errors.login?.message },
      password: { ...register("password"), error: errors.password?.message },
    },
  };
};

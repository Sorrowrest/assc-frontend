import React, { useState } from "react";
import styles from "./authForm.module.scss";
import { Input } from "@app/ui/Input";
import { Button } from "@app/ui/Button";
import { Controller, useForm } from "react-hook-form";
import { SignInRequest } from "@app/modules/auth/auth.type";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signIn } from "@app/modules/auth/auth.api";

export const AuthForm = () => {
  const navigator = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<SignInRequest>({
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const signInWrapper = async (data: SignInRequest) => {
    setLoading(true);
    const signInData = await signIn(data);
    if (signInData) {
      navigator("/");
    } else {
      toast.error("Пользователь не найден!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(signInWrapper)}>
      <div className={styles.wrapper}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value ?? ""}
              label="EMAIL"
              fullWidth
              className={styles.input}
              color="secondary"
              variant="outlined"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              type="password"
              label="PASSWORD"
              fullWidth
              className={styles.input}
              color="secondary"
              variant="outlined"
            />
          )}
        />

        <Button
          disabled={isLoading}
          className={styles.button}
          type="submit"
          fullWidth
          color="secondary"
          variant="contained"
        >
          Войти
        </Button>
      </div>
    </form>
  );
};

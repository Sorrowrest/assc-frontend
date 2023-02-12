import * as React from "react";
import styles from "./auth.module.scss";
import { Icons } from "@app/assets";
import { AuthForm } from "@app/modules/auth/authForm";

export const AuthScreen = () => {
  return (
    <div className={styles.wrapper}>
      <Icons.Logo />
      <AuthForm />
    </div>
  );
};

//@ts-nocheck

import { AxiosError } from "axios";
import React from "react";
import styles from "./talonsErrorValidator.module.scss";
import { Text } from "@app/ui";

//
type Props = {
  error: AxiosError | null;
};

export const TalonsErrorValidator: React.FC<Props> = ({ error }) => {
  if (error) {
    const errCode: number = error.message.response!.status;

    return (
      <div className={styles.wrapper}>
        <Text>
          {errCode === 500
            ? "Ошибка сервера"
            : "Пользователь уже пользовался талоном"}
        </Text>
        <img src={`https://http.cat/${errCode}`} width={350}></img>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Text>Пользователь отмечен</Text>
      <img src={`https://http.cat/200`} width={350}></img>
    </div>
  );
};

import React from "react";
import styles from "./aside.module.scss";
import { Text } from "@app/ui";

export const AsideMenu = () => {
  return (
    <aside className={styles.wrapper}>
      <p className={styles.info}>Информация</p>
      <Text.Link className={styles.link} size={12} to="/talons">
        как получить талоны
      </Text.Link>
      <Text.Link className={styles.link} size={12} to="/transfer">
        трансфер
      </Text.Link>
      <Text.Link className={styles.link} size={12} to="/map">
        карта
      </Text.Link>
      <Text.Link className={styles.link} size={12} to="/events">
        мероприятия
      </Text.Link>
      <Text.Link className={styles.link} size={12} to="/curator">
        связь с куратором
      </Text.Link>
    </aside>
  );
};

import React from "react";
import dayjs from "dayjs";

import styles from "./transferInfo.module.scss";
import { PlaceBlock } from "@app/modules/transfer/components/placeBlock/placeBlock";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

export const TransferInfo = () => {
  const now = dayjs().format("L");

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <p>День заезда</p>
        <div className={styles.scheduleBlock}>
          <PlaceBlock
            title="Аэропорт"
            info={[
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
            ]}
          />
          <PlaceBlock
            title="Аэропорт"
            info={[
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <p>День отъезда</p>
        <div className={styles.scheduleBlock}>
          <PlaceBlock
            title="Аэропорт"
            info={[
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
            ]}
          />
          <PlaceBlock
            title="Аэропорт"
            info={[
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
              {
                time: "10:00",
                aboutBus: "Higer KLQ6128LQ B 536 TE",
                contactWithDriver: "https://t.me/byeraon",
                name: "Автобус 55 мест",
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.selfGoing}>
        <Text color={colors.secondary}>самостоятельное прибытие</Text>
        <Text color={colors.four} font="Jost">
          Обращаем ваше внимание, что трансфер до места проведения фестиваля
          осуществляется только из мест, указанных на этой странице. Вас
          встретит человек с соответствующей табличкой.
        </Text>
      </div>
    </div>
  );
};

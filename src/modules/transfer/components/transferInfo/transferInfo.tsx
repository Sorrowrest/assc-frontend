import React from "react";

import styles from "./transferInfo.module.scss";
import { PlaceBlock } from "@app/modules/transfer/components/placeBlock/placeBlock";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import { useTransferData } from "@app/modules/transfer/hooks/useTransferData";

export const TransferInfo = () => {
  const transfer = useTransferData();

  const checkInTransfers =
    transfer.data &&
    transfer.data.filter((trans) => trans.dayType === "checkin");
  const checkOutTransfers =
    transfer.data &&
    transfer.data.filter((trans) => trans.dayType === "checkout");

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <p>День заезда</p>
        <div className={styles.scheduleBlock}>
          {checkInTransfers &&
            checkInTransfers.map((trans) => (
              <PlaceBlock
                title={trans.title}
                info={trans.transfers.map((oneTrans) => ({
                  name: oneTrans.busName,
                  aboutBus: oneTrans.number,
                  contactWithDriver: oneTrans.contact,
                  time: oneTrans.time,
                }))}
              />
            ))}
        </div>
      </div>
      <div className={styles.infoBlock}>
        <p>День отъезда</p>
        <div className={styles.scheduleBlock}>
          {checkOutTransfers &&
            checkOutTransfers.map((trans) => (
              <PlaceBlock
                title={trans.title}
                info={trans.transfers.map((oneTrans) => ({
                  name: oneTrans.busName,
                  aboutBus: oneTrans.number,
                  contactWithDriver: oneTrans.contact,
                  time: oneTrans.time,
                }))}
              />
            ))}
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

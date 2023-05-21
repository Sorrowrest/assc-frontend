import React from "react";

import styles from "./transferInfo.module.scss";
import { PlaceBlock } from "@app/modules/transfer/components/placeBlock/placeBlock";
import { Button, Text } from "@app/ui";
import { colors } from "@app/shared";
import { useTransferData } from "@app/modules/transfer/hooks/useTransferData";
import { TTransfer } from "@app/modules/transfer/transfer.type";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { Role } from "@app/modules/auth/auth.type";

export const TransferInfo = () => {
  const { data, handleCreateEmptyTransfer } = useTransferData();
  const { data: profile } = useProfile();

  const checkInTransfers =
    data && data.filter((trans) => trans.dayType === "checkin");
  const checkOutTransfers =
    data && data.filter((trans) => trans.dayType === "checkout");

  const handleCreateEmpty = (type: TTransfer["dayType"]) => {
    handleCreateEmptyTransfer.mutate(type);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <p>День заезда</p>
        <div className={styles.scheduleBlock}>
          {checkInTransfers &&
            checkInTransfers.map((trans) => (
              <PlaceBlock
                key={trans._id}
                id={trans._id}
                title={trans.title}
                info={trans.transfers.map((oneTrans) => ({
                  name: oneTrans.busName,
                  aboutBus: oneTrans.number,
                  contactWithDriver: oneTrans.contact,
                  time: oneTrans.time,
                }))}
              />
            ))}
          {profile?.data.role === Role.Admin && (
            <Button
              onClick={() => handleCreateEmpty("checkin")}
              color="secondary"
            >
              Добавить
            </Button>
          )}
        </div>
      </div>
      <div className={styles.infoBlock}>
        <p>День отъезда</p>
        <div className={styles.scheduleBlock}>
          {checkOutTransfers &&
            checkOutTransfers.map((trans) => (
              <PlaceBlock
                key={trans._id}
                id={trans._id}
                title={trans.title}
                info={trans.transfers.map((oneTrans) => ({
                  name: oneTrans.busName,
                  aboutBus: oneTrans.number,
                  contactWithDriver: oneTrans.contact,
                  time: oneTrans.time,
                }))}
              />
            ))}
          {profile?.data.role === Role.Admin && (
            <Button
              onClick={() => handleCreateEmpty("checkout")}
              color="secondary"
            >
              Добавить
            </Button>
          )}
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

import * as React from "react";
import styles from "./userQr.module.scss";
import QRCode from "react-qr-code";
import { useProfileStore } from "@app/modules/auth";
import { colors } from "@app/shared";

export const UserQr = () => {
  const { profile } = useProfileStore();

  return (
    <div className={styles.wrapper}>
      <QRCode
        bgColor={colors.primary}
        className={styles.qr}
        value={`${window.location.origin}/getTalon/${profile?._id as string}`}
      />
    </div>
  );
};

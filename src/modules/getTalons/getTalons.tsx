import styles from "./getTalons.module.scss";
import { useParams } from "react-router-dom";
import { useTalonsData } from "@app/modules/getTalons/hooks/useTalonsData";
import { useEffect } from "react";
import { TalonsErrorValidator } from "@app/modules/getTalons/components/talonsErrorValidator/talonsErrorValidator";
import { AxiosError } from "axios";

export const GetTalonsBlock = () => {
  const { userId } = useParams();
  const { fetchUserTalon } = useTalonsData();

  useEffect(() => {
    if (userId) {
      fetchUserTalon.mutate(userId);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {!fetchUserTalon.isLoading && (
        <TalonsErrorValidator error={fetchUserTalon.error as AxiosError} />
      )}
    </div>
  );
};

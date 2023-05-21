import { Icons } from "@app/assets";
import React from "react";
import styles from "./header.module.scss";
import { Text } from "@app/ui";
import { Link } from "react-router-dom";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { Role } from "../auth/auth.type";

export const Header = () => {
  const { handleCreateEmptyEvent } = useEventsData();
  const { data: profile } = useProfile();

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <Icons.LogoLayout />
      </Link>

      <div className={styles.rightBlock}>
        {profile?.data.role === Role.Admin && (
          <Text
            className={styles.link}
            onClick={() => handleCreateEmptyEvent.mutate()}
          >
            СОЗДАТЬ ПУСТОЕ МЕРОПРИЯТИЕ
          </Text>
        )}

        <Text.Link className={styles.link} to="/sign">
          ВЫЙТИ
        </Text.Link>
      </div>
    </div>
  );
};

import { Icons } from "@app/assets";
import React from "react";
import styles from "./header.module.scss";
import { Text } from "@app/ui";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <Icons.LogoLayout />
      </Link>

      <div className={styles.rightBlock}>
        <Text.Link to="/sign">ВЫЙТИ</Text.Link>
      </div>
    </div>
  );
};

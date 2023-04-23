import styles from "./profile.module.scss";
import React, { useRef, useState } from "react";
import { Input, Text } from "@app/ui";
import { colors } from "@app/shared";

interface Event<T = EventTarget> {
  target: T;
}

export const ProfileBlock = () => {
  const avatarRef = useRef<HTMLInputElement>(null);
  const [newAvatar, setAvatar] = useState<null | {
    file: File;
    base64: string;
  }>(null);

  const fileAdd = () => {
    if (avatarRef.current) {
      avatarRef.current.click();
    }
  };

  const onFileUpload = (event: Event<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    if (fileUploaded && fileUploaded.length > 0) {
      const file = fileUploaded[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAvatar({ file, base64: reader.result as string });
      };
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Input.Profile placeholder="Имя" color="secondary"></Input.Profile>
        <Input.Profile placeholder="Фамилия" color="secondary"></Input.Profile>
        <Input.Profile placeholder="ССК" color="secondary"></Input.Profile>
        <Input.Profile
          placeholder="Направление"
          value="Спортивный менеджмент"
          color="secondary"
        ></Input.Profile>
      </div>
      <div>
        <Input.Profile
          placeholder="Дата рождения"
          color="secondary"
        ></Input.Profile>
        <Input.Profile placeholder="Город" color="secondary"></Input.Profile>
        <Input.Profile placeholder="ВУЗ" color="secondary"></Input.Profile>
        <Input.Profile
          placeholder="Специальность"
          color="secondary"
        ></Input.Profile>
      </div>
      <div className={styles.wrapperAvatar}>
        <img
          className={styles.avatar}
          width="100%"
          src={
            newAvatar?.base64 ??
            "https://sun1-85.userapi.com/impg/uSePGJLmEddYLBLkaMNJoQGzqiNkDX-cYZN0RA/Ejb_TmdeTXE.jpg?size=1620x2160&quality=95&sign=eadab1973ae5238e944f5a31ee4c6584&type=album"
          }
        />

        <input
          onChange={onFileUpload}
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          ref={avatarRef}
          type="file"
        />
        <Text
          onClick={fileAdd}
          className={styles.photoText}
          size={16}
          color={colors.secondary}
        >
          Изменить фотографию
        </Text>
      </div>
    </div>
  );
};

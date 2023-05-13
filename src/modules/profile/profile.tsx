import styles from "./profile.module.scss";
import React, { useRef, useState } from "react";
import { Button, DatePicker, Input } from "@app/ui";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { useProfileStore } from "@app/modules/auth";
import { useFormik } from "formik";
import dayjs from "dayjs";

interface Event<T = EventTarget> {
  target: T;
}

export const ProfileBlock = () => {
  const { profile } = useProfileStore();
  const avatarRef = useRef<HTMLInputElement>(null);
  const { handleUpdateAvatar } = useProfile();
  const [newAvatar, setAvatar] = useState<null | {
    file: File;
    base64: string;
  }>(null);
  const { data } = useProfile();
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      birthday: profile?.birthday,
      phone: profile?.phone,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const fileAdd = () => {
    if (avatarRef.current) {
      avatarRef.current.click();
    }
  };

  const handlePushPhoto = async () => {
    if (newAvatar && handleUpdateAvatar) {
      const response = await handleUpdateAvatar.mutate(newAvatar.file);
      console.log(response);
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
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div>
        <Input.Profile
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="Имя"
          color="secondary"
        ></Input.Profile>
        <Input.Profile
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Фамилия"
          color="secondary"
        ></Input.Profile>
        <Input.Profile
          defaultValue="Реактор"
          placeholder="ССК"
          color="secondary"
        ></Input.Profile>
        <Input.Profile
          placeholder="Направление"
          value="Спортивный менеджмент"
          color="secondary"
        ></Input.Profile>
      </div>
      <div>
        <DatePicker
          value={dayjs(values.birthday)}
          onChange={(value) => setFieldValue("birthday", value, true)}
        />
        <Input.Profile placeholder="Город" color="secondary"></Input.Profile>
        <Input.Profile placeholder="ВУЗ" color="secondary"></Input.Profile>
        <Input.Profile
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Телефон"
          color="secondary"
        ></Input.Profile>
      </div>
      <div className={styles.wrapperAvatar}>
        <img
          className={styles.avatar}
          width="100%"
          src={newAvatar?.base64 ?? data?.data.avatar}
        />

        <input
          onChange={onFileUpload}
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          ref={avatarRef}
          type="file"
        />
        <Button onClick={fileAdd} color="secondary">
          Изменить фотографию
        </Button>
        {newAvatar && (
          <Button onClick={handlePushPhoto} color="secondary">
            Сохранить
          </Button>
        )}
      </div>
      <Button className={styles.saveButton} type="submit" color="primary">
        Сохранить
      </Button>
    </form>
  );
};

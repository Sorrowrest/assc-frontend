import styles from "./profile.module.scss";
import React, { useRef, useState } from "react";
import { Button, DatePicker, Input, Select } from "@app/ui";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { useProfileStore } from "@app/modules/auth";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { MenuItem } from "@mui/material";
import { UserUpdateRequest } from "@app/modules/auth/auth.type";

interface Event<T = EventTarget> {
  target: T;
}

export const ProfileBlock = () => {
  const { profile } = useProfileStore();
  const avatarRef = useRef<HTMLInputElement>(null);
  const { handleUpdateAvatar, handleUpdateUser, handleUpdatePassword } =
    useProfile();
  const [newAvatar, setAvatar] = useState<null | {
    file: File;
    base64: string;
  }>(null);
  const { data } = useProfile();
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      oldPassword: "",
      newPassword: "",
      birthday: profile?.birthday,
      phone: profile?.phone,
      secondName: profile?.secondName,
      gender: profile?.gender,
      userName: profile?.userName,
      email: profile?.email,
    },
    onSubmit: (values) => {
      const { oldPassword, newPassword, ...dataValues } = values;
      handleUpdateUser!.mutate({
        ...dataValues,
        _id: profile?._id,
        birthday: Number(new Date(values.birthday!)),
      } as UserUpdateRequest);

      if (oldPassword && newPassword) {
        handleUpdatePassword!.mutate({ oldPassword, newPassword });
      }
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
          id="secondName"
          name="secondName"
          value={values.secondName}
          onChange={handleChange}
          placeholder="Отчество"
          color="secondary"
        ></Input.Profile>
        <Select
          value={values.gender}
          onChange={(value) =>
            setFieldValue("gender", value.target.value, true)
          }
        >
          <MenuItem value="male">Муж.</MenuItem>
          <MenuItem value="female">Жен.</MenuItem>
        </Select>
      </div>
      <div>
        <DatePicker
          value={dayjs(values.birthday)}
          onChange={(value) => setFieldValue("birthday", value, true)}
        />
        <Input.Phone
          value={values.phone}
          onChange={(value) => setFieldValue("phone", value, true)}
        />
        <Input.Profile
          id="userName"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          placeholder="Логин"
          color="secondary"
        ></Input.Profile>
        <Input.Profile
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Почта"
          color="secondary"
        ></Input.Profile>
      </div>
      <div>
        <Input.Profile
          id="oldPassword"
          name="oldPassword"
          value={values.oldPassword}
          onChange={handleChange}
          placeholder="Старый пароль"
          color="secondary"
        ></Input.Profile>
        <Input.Profile
          id="newPassword"
          name="newPassword"
          value={values.newPassword}
          onChange={handleChange}
          placeholder="Новый Пароль"
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
      <div className={styles.saveButton}>
        <Button type="submit" color="primary">
          Обновить данные
        </Button>
      </div>
    </form>
  );
};

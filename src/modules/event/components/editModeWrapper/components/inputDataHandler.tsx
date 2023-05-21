import React from "react";
import { DatePicker, Input } from "@app/ui";
import dayjs from "dayjs";
import { EditModeProps } from "@app/modules/event/components/editModeWrapper/editModeWrapper";

export const InputDataHandler: React.FC<Omit<EditModeProps, "editModeOn">> = ({
  name,
  setFieldValue,
  value,
}) => {
  if (name === "Название") {
    return (
      <Input.Profile
        placeholder="Название"
        color="secondary"
        onChange={(e) => setFieldValue("title", e.target.value)}
        defaultValue={value}
      ></Input.Profile>
    );
  }

  if (name === "Даты проведения") {
    const [dateStart, dateEnd] = value.split(" - ");
    return (
      <>
        <DatePicker
          onChange={(value) => setFieldValue("dateStart", value)}
          defaultValue={dayjs(dateStart)}
        ></DatePicker>
        <DatePicker
          onChange={(value) => setFieldValue("dateEnd", value)}
          defaultValue={dayjs(dateEnd)}
        ></DatePicker>
      </>
    );
  }

  if (name === "Описание") {
    return (
      <Input.Profile
        placeholder="Описание"
        multiline
        onChange={(e) => setFieldValue("description", e.target.value)}
        color="secondary"
        defaultValue={value}
      ></Input.Profile>
    );
  }

  return <></>;
};

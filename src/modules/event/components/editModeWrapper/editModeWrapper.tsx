import { DataShow, DataShowProps } from "../dataShow/dataShow";
import React from "react";
import styles from "./editModeWrapper.module.scss";
import { Text } from "@app/ui";
import { InputDataHandler } from "@app/modules/event/components/editModeWrapper/components/inputDataHandler";
import { FormikErrors } from "formik";

export type EditModeProps = DataShowProps & {
  editModeOn: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<
        FormikErrors<{
          dateStart: any;
          description: any;
          dateEnd: any;
          title: any;
        }>
      >
    | Promise<void>;
};

export const EditModeWrapper: React.FC<EditModeProps> = ({
  editModeOn,
  setFieldValue,
  ...props
}) => {
  if (editModeOn) {
    return (
      <div className={styles.wrapper}>
        <Text size={12}>--- {props.name}</Text>
        <InputDataHandler setFieldValue={setFieldValue} {...props} />
      </div>
    );
  }

  return <DataShow {...props} />;
};

import { Modal, ModalProps } from "@mui/material";
import React from "react";
import { TPlaceBlock } from "../placeBlock/placeBlock";
import styles from "./editModal.module.scss";
import { Button, Input, Text } from "@app/ui";
import { FieldArray, Form, Formik } from "formik";
import { useTransferData } from "@app/modules/transfer/hooks/useTransferData";
import { colors } from "@app/shared";

type Props = Omit<ModalProps, "children"> & {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editData: TPlaceBlock | null;
};

export const EditModal: React.FC<Props> = ({
  setIsOpen,
  editData,
  ...props
}) => {
  const { handleUpdateTransfer, handleDeleteTransfer } = useTransferData();

  const handleSubmit = async (values: any) => {
    try {
      await handleUpdateTransfer.mutate({
        ...values,
        info: undefined,
        transfers: values.info.map((info: any) => ({
          number: info.aboutBus,
          contact: info.contactWithDriver,
          busName: info.name,
          time: info.time,
        })),
      });
      setIsOpen(false);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const handleDelete = async () => {
    try {
      await handleDeleteTransfer.mutate({
        id: editData!.id!,
      });
      setIsOpen(false);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  return (
    <Modal className={styles.modal} {...props}>
      <Formik
        initialValues={{
          title: editData?.title,
          _id: editData?.id,
          info: editData?.info,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form className={styles.wrapper}>
            <>
              <Text color={colors.secondary}>Название</Text>
              <Input.Profile
                defaultValue={editData?.title}
                color="primary"
              ></Input.Profile>
              <FieldArray
                name="info"
                render={(arrayHelpers) => (
                  <div className={styles.wrapBlock}>
                    {values.info && values.info.length > 0 ? (
                      values.info.map((info, index) => (
                        <div className={styles.wrapBlock} key={index}>
                          <Text color={colors.secondary}>
                            ----- ----- ----- -----
                          </Text>
                          <Input.Profile
                            placeholder="Название"
                            color="secondary"
                            onChange={handleChange}
                            defaultValue={info.name}
                            name={`info.[${index}].name`}
                          />
                          <Input.Profile
                            placeholder="Об автобусе"
                            color="secondary"
                            onChange={handleChange}
                            defaultValue={info.aboutBus}
                            name={`info.[${index}].aboutBus`}
                          />
                          <Input.Profile
                            placeholder="Ссылка на котакт с водителем"
                            color="secondary"
                            onChange={handleChange}
                            defaultValue={info.contactWithDriver}
                            name={`info.[${index}].contactWithDriver`}
                          />
                          <Input.Profile
                            placeholder="Время"
                            color="secondary"
                            onChange={handleChange}
                            defaultValue={info.time}
                            name={`info.[${index}.time`}
                          />

                          <Button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Удалить
                          </Button>
                          <Button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, info)}
                          >
                            Добавтить
                          </Button>
                        </div>
                      ))
                    ) : (
                      <Button
                        type="button"
                        className={styles.addButton}
                        onClick={() => arrayHelpers.push({})}
                      >
                        Добавить информацию о трансфере
                      </Button>
                    )}
                  </div>
                )}
              />
            </>
            <Button onClick={() => handleSubmit()}>Отправить</Button>
            <Button onClick={() => handleDelete()}>Удалить трансфер</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

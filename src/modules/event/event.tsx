import { useNavigate, useParams } from "react-router-dom";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { DataShow } from "@app/modules/event/components/dataShow/dataShow";
import dayjs from "dayjs";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import styles from "./event.module.scss";
import { Button } from "@app/ui";
import { EditModeWrapper } from "@app/modules/event/components/editModeWrapper/editModeWrapper";
import { useFormik } from "formik";

interface Event<T = EventTarget> {
  target: T;
}

const nameByCategory = {
  sport: "Спортивные",
  eat: "Питание",
};

export const EventBlock = () => {
  const [isEditMode, setEditMode] = useState(false);
  const { data: profile } = useProfile();
  const { eventId } = useParams<{ eventId: string }>();
  const {
    data: events,
    handleRegisterEvent,
    handleUpdateEvent,
    handleAddEventPhoto,
    handleDeleteEvent,
    handleUnRegisterEvent,
  } = useEventsData();
  const navigate = useNavigate();
  const [newImage, setAvatar] = useState<null | {
    file: File;
    base64: string;
  }>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const event = useMemo(() => {
    if (events && eventId) {
      return events.find((evt) => evt._id === eventId) || null;
    }
    return undefined;
  }, [eventId, events]);

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

  const { setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title: event?.title,
      description: event?.description,
      dateStart: event?.dateStart,
      dateEnd: event?.dateEnd,
    },
    onSubmit: async (values) => {
      try {
        await handleUpdateEvent.mutate({
          ...values,
          _id: event?._id,
          dateStart: values.dateStart
            ? Number(new Date(values.dateStart))
            : undefined,
          dateEnd: values.dateEnd
            ? Number(new Date(values.dateEnd))
            : undefined,
        });
        setEditMode(false);
      } catch (e: any) {
        throw new Error(e);
      }
    },
  });

  const fileAdd = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handlePushPhoto = async () => {
    if (newImage && handleAddEventPhoto) {
      const response = await handleAddEventPhoto.mutate({
        photo: newImage.file,
        id: eventId as string,
      });
      console.log(response);
    }
  };

  useEffect(() => {
    if (event === null) {
      toast.error("Event not found - 404");
      toast.info("Нажмите, чтобы перейти на главную", {
        autoClose: false,
        onClick: () => {
          navigate("/");
          toast.dismiss();
        },
      });
    }
  }, [event]);

  const userIsRegistered = useMemo(() => {
    if (event && profile) {
      return event.members.find((member) => member._id === profile.data._id);
    }
    return undefined;
  }, [event, profile]);

  const handleAcceptEvent = useCallback(() => {
    if (event && profile) {
      if (userIsRegistered) {
        handleUnRegisterEvent.mutate({
          _id: event._id,
          userId: profile.data._id,
        });
      } else {
        handleRegisterEvent.mutate({
          _id: event._id,
          userId: profile.data._id,
        });
      }
    }
  }, [event, profile, userIsRegistered]);

  return event ? (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div>
        <EditModeWrapper
          setFieldValue={setFieldValue}
          editModeOn={isEditMode}
          name="Название"
          value={event.title}
        ></EditModeWrapper>
        <EditModeWrapper
          setFieldValue={setFieldValue}
          editModeOn={isEditMode}
          name="Даты проведения"
          value={`${dayjs(event.dateStart).format("L")} - ${dayjs(
            event.dateEnd
          ).format("L")}`}
        ></EditModeWrapper>
        <DataShow
          name="Количество участников"
          value={event.members.length.toString()}
        ></DataShow>
        <DataShow
          name="Преподаватель / автор"
          value={`${event.author.firstName} ${event.author.lastName}`}
        ></DataShow>
        <DataShow
          name="Категория"
          value={nameByCategory[event.category]}
        ></DataShow>
        <EditModeWrapper
          setFieldValue={setFieldValue}
          editModeOn={isEditMode}
          name="Описание"
          value={event.description}
        ></EditModeWrapper>
      </div>
      {event.photos ? (
        <div className={styles.wrapImage}>
          {(event.photos.length > 0 || newImage) && (
            <img
              alt="Фото мероприятия"
              className={styles.image}
              width={250}
              src={newImage?.base64 || event.photos[0]}
            ></img>
          )}
          {event.author._id === profile?.data._id && isEditMode && (
            <>
              <input
                onChange={onFileUpload}
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                ref={imageRef}
                type="file"
              />
              <Button onClick={fileAdd} color="primary">
                Изменить фотографию
              </Button>
              {newImage && (
                <Button onClick={handlePushPhoto} color="primary">
                  Сохранить
                </Button>
              )}
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.fullWidth}>
        <Button onClick={handleAcceptEvent} color="primary">
          {userIsRegistered ? "Отменить" : "Зарегистрироваться"}
        </Button>
        <Button onClick={() => navigate("/events")} color="primary">
          Показать на доске
        </Button>
        {profile?.data._id === event.author._id && (
          <Button
            onClick={() => setEditMode((prevState) => !prevState)}
            color="primary"
          >
            {isEditMode
              ? "Отключить режим редактирования"
              : "Включить режим редактирования"}
          </Button>
        )}
        {isEditMode && (
          <Button type="submit" color="primary">
            Сохранить
          </Button>
        )}
        {isEditMode && (
          <Button
            onClick={() => handleDeleteEvent.mutate({ id: eventId as string })}
            color="primary"
          >
            Удалить
          </Button>
        )}
      </div>
    </form>
  ) : (
    <></>
  );
};

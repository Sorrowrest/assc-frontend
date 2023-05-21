import { useNavigate, useParams } from "react-router-dom";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { DataShow } from "@app/modules/event/components/dataShow/dataShow";
import dayjs from "dayjs";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import styles from "./event.module.scss";
import { Button } from "@app/ui";
import { EditModeWrapper } from "@app/modules/event/components/editModeWrapper/editModeWrapper";
import { useFormik } from "formik";

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
    handleUnRegisterEvent,
  } = useEventsData();
  const navigate = useNavigate();

  const event = useMemo(() => {
    if (events && eventId) {
      return events.find((evt) => evt._id === eventId) || null;
    }
    return undefined;
  }, [eventId, events]);

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
      {event.photos.length > 0 ? (
        <img
          alt="Фото мероприятия"
          className={styles.image}
          width={250}
          src={event.photos[0]}
        ></img>
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
      </div>
    </form>
  ) : (
    <></>
  );
};

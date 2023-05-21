import { useMutation, useQuery } from "@tanstack/react-query";
import {
  TDeleteEvent,
  TEvent,
  TRegisterEvent,
  TUpdateEvent,
} from "../events.type";
import { STALE_TIME } from "@core/services";
import {
  createEmptyEvent,
  deleteEvent,
  editPhoto,
  fetchEvents,
  registerEvent,
  unRegisterEvent,
  updateEvent,
} from "../events.api";
import { toast } from "react-toastify";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { useNavigate } from "react-router-dom";

export const useEventsData = () => {
  const { data, refetch } = useQuery<TEvent[]>(["events"], fetchEvents, {
    staleTime: STALE_TIME,
  });
  const { data: profile } = useProfile();
  const navigate = useNavigate();

  const handleRegisterEvent = useMutation(
    ["events"],
    async (data: TRegisterEvent) => await registerEvent(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Вы зарегистрированы на мероприятие!");
      },
    }
  );

  const handleUnRegisterEvent = useMutation(
    ["events"],
    async (data: TRegisterEvent) => await unRegisterEvent(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Вы отписались от мероприятия!");
      },
    }
  );

  const handleUpdateEvent = useMutation(
    ["events"],
    async (data: Partial<TUpdateEvent>) => await updateEvent(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Мероприятие обновлено!");
      },
    }
  );

  const handleCreateEmptyEvent = useMutation(
    ["events"],
    () => createEmptyEvent(profile!.data),
    {
      onSuccess: (data) => {
        console.log("created", data);
        refetch();
        toast.success("Мероприятие создано!");
        navigate(`/events/${data._id}`);
      },
    }
  );

  const handleAddEventPhoto = useMutation(
    ["events"],
    async ({ photo, id }: { photo: File; id: string }) =>
      await editPhoto(photo, id),
    {
      onSuccess: () => {
        toast.success("Фото обновлено!");
        refetch();
      },
    }
  );

  const handleDeleteEvent = useMutation(
    ["events"],
    async (data: TDeleteEvent) => await deleteEvent(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Мероприятие удалено!");
        navigate("/events");
      },
    }
  );

  return {
    data,
    handleRegisterEvent,
    handleUnRegisterEvent,
    handleUpdateEvent,
    handleDeleteEvent,
    handleAddEventPhoto,
    handleCreateEmptyEvent,
  };
};

import { useMutation, useQuery } from "@tanstack/react-query";
import { TEvent, TRegisterEvent, TUpdateEvent } from "../events.type";
import { STALE_TIME } from "@core/services";
import {
  fetchEvents,
  registerEvent,
  unRegisterEvent,
  updateEvent,
} from "../events.api";
import { toast } from "react-toastify";

export const useEventsData = () => {
  const { data, refetch } = useQuery<TEvent[]>(["events"], fetchEvents, {
    staleTime: STALE_TIME,
  });

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

  return {
    data,
    handleRegisterEvent,
    handleUnRegisterEvent,
    handleUpdateEvent,
  };
};

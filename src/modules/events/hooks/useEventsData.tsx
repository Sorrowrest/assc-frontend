import { useMutation, useQuery } from "@tanstack/react-query";
import { Event, TRegisterEvent } from "../events.type";
import { STALE_TIME } from "@core/services";
import { fetchEvents, registerEvent, unRegisterEvent } from "../events.api";

export const useEventsData = () => {
  const { data, refetch } = useQuery<Event[]>(["events"], fetchEvents, {
    staleTime: STALE_TIME,
  });

  const handleRegisterEvent = useMutation(
    ["events"],
    async (data: TRegisterEvent) => await registerEvent(data),
    {
      onSuccess: () => refetch(),
    }
  );

  const handleUnRegisterEvent = useMutation(
    ["events"],
    async (data: TRegisterEvent) => await unRegisterEvent(data),
    {
      onSuccess: () => refetch(),
    }
  );

  return { data, handleRegisterEvent, handleUnRegisterEvent };
};

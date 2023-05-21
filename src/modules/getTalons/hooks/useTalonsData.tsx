import { useMutation, useQuery } from "@tanstack/react-query";
import { TEvent } from "@app/modules/events/events.type";
import { fetchUserTalon as fetchUserTalonAPI } from "@app/modules/getTalons/getTalons.api";
import { fetchEvents } from "@app/modules/events/events.api";

export const useTalonsData = () => {
  const { refetch } = useQuery<TEvent[]>(["events"], fetchEvents);

  const fetchUserTalon = useMutation(["talons"], fetchUserTalonAPI, {
    onSuccess: () => {
      refetch();
    },
  });

  return { fetchUserTalon };
};

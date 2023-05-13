import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Event } from "../event.type";
import { STALE_TIME } from "@core/services";

export async function fetchEvents() {
  try {
    const { data } = await axios.get<Event[]>(`/events`);

    return data.sort(function (a, b) {
      return Number(new Date(a.dateStart)) - Number(new Date(b.dateStart));
    });
  } catch (e: any) {
    throw new AxiosError(e);
  }
}

export const useEventsData = () => {
  return useQuery<Event[]>(["events"], fetchEvents, {
    staleTime: STALE_TIME,
  });
};

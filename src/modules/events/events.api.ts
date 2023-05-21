import axios, { AxiosError } from "axios";
import {
  TEvent,
  TRegisterEvent,
  TUpdateEvent,
} from "@app/modules/events/events.type";

export const fetchEvents = async () => {
  try {
    const { data } = await axios.get<TEvent[]>(`/events`);

    return data.sort(function (a, b) {
      return Number(new Date(a.dateStart)) - Number(new Date(b.dateStart));
    });
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

export const registerEvent = async (registerInfo: TRegisterEvent) => {
  const { data } = await axios.post<TEvent[]>(`/events/register`, registerInfo);

  return data;
};

export const unRegisterEvent = async (registerInfo: TRegisterEvent) => {
  const { data } = await axios.post<TEvent[]>(
    `/events/unregister`,
    registerInfo
  );

  return data;
};

export const updateEvent = async (updateInfo: Partial<TUpdateEvent>) => {
  const { data } = await axios.put<TEvent[]>(`/events`, updateInfo);

  return data;
};

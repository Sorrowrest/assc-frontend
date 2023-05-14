import axios, { AxiosError } from "axios";
import { Event, TRegisterEvent } from "@app/modules/events/events.type";

export const fetchEvents = async () => {
  try {
    const { data } = await axios.get<Event[]>(`/events`);

    return data.sort(function (a, b) {
      return Number(new Date(a.dateStart)) - Number(new Date(b.dateStart));
    });
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

export const registerEvent = async (registerInfo: TRegisterEvent) => {
  const { data } = await axios.post<Event[]>(`/events/register`, registerInfo);

  return data;
};

export const unRegisterEvent = async (registerInfo: TRegisterEvent) => {
  const { data } = await axios.post<Event[]>(
    `/events/unregister`,
    registerInfo
  );

  return data;
};

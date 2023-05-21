import axios, { AxiosError } from "axios";
import {
  TDeleteEvent,
  TEvent,
  TRegisterEvent,
  TUpdateEvent,
} from "@app/modules/events/events.type";
import { TUser } from "@app/modules/auth/auth.type";
import { TTransfer } from "@app/modules/transfer/transfer.type";

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

export const createEmptyEvent = async (user: TUser) => {
  try {
    const { _id, ...newEvent } = new TEvent({
      author: user._id as Partial<TUser>,
      title: "Новый ивент",
      _id: undefined,
      dateStart: new Date(),
      dateEnd: new Date(),
      description: "Новое описание",
    });
    const { data } = await axios.post<TEvent>(`/events`, newEvent);

    return data;
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

export const editPhoto = async (photo: File, id: string) => {
  const formData = new FormData();
  formData.append("files", photo);
  formData.append("id", id);
  const response = await axios.post<{ access_token: string }>(
    "events/avatar",
    formData
  );
  return response;
};

export const deleteEvent = async (eventDelete: TDeleteEvent) => {
  const { data } = await axios.delete<TTransfer[]>(`/events`, {
    data: eventDelete,
  });

  return data;
};

import axios, { AxiosError } from "axios";
import {
  TDeleteTransfer,
  TTransfer,
  TUpdateTransfer,
} from "@app/modules/transfer/transfer.type";

export const fetchTransfers = async () => {
  try {
    const { data } = await axios.get<TTransfer[]>(`/transfer`);

    return data;
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

export const updateTransfer = async (updateInfo: Partial<TUpdateTransfer>) => {
  const { data } = await axios.put<TTransfer[]>(`/transfer`, updateInfo);

  return data;
};

export const deleteTransfer = async (deleteTransferInfo: TDeleteTransfer) => {
  const { data } = await axios.delete<TTransfer[]>(`/transfer`, {
    data: deleteTransferInfo,
  });

  return data;
};

export const createEmptyTransfer = async (type: TTransfer["dayType"]) => {
  const { data } = await axios.post<TTransfer[]>(`/transfer`, {
    transfers: [
      {
        busName: "",
        number: "",
        contact: "",
        time: "00:00",
      },
    ],
    title: "Аэропорт",
    dayType: type,
  });

  return data;
};

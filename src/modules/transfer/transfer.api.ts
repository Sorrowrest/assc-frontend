import axios, { AxiosError } from "axios";
import { TTransfer } from "@app/modules/transfer/transfer.type";

export const fetchTransfers = async () => {
  try {
    const { data } = await axios.get<TTransfer[]>(`/transfer`);

    return data;
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

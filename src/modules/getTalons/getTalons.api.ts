import axios, { AxiosError } from "axios";

export const fetchUserTalon = async (userId: string) => {
  try {
    const { data } = await axios.get<any>(`/events/getTalon/${userId}`);

    return data;
  } catch (e: any) {
    throw new AxiosError(e);
  }
};

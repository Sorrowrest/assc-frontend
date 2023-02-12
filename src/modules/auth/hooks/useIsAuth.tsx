import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../auth.api";
import { User } from "@core/models/User";
import { AxiosError } from "axios";

export const useIsAuth = () => {
  const token = localStorage.getItem("accessToken");

  const { data, isLoading } = useQuery<User, AxiosError>(["profile"], getAuth, {
    enabled: !!token,
  });

  if (!token)
    return {
      isLoading: false,
      isAuth: false,
    };

  return { isAuth: !!data, isLoading };
};

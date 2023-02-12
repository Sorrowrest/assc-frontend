import axios from "axios";
import { SignInRequest } from "@app/modules/auth/auth.type";
import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { User } from "@app/core/models/User";
import { initAxiosInstance } from "@core/services/api";

export const getAuth: QueryFunction<User, QueryKey> = async () => {
  initAxiosInstance();
  return await axios.get("profile");
};

export const signIn = async (data: SignInRequest) => {
  try {
    const response = await axios.post<{ access_token: string }>(
      "auth/login",
      data
    );
    localStorage.setItem("accessToken", response.data.access_token);
    return response.data.access_token;
  } catch (e) {
    console.error(e);
  }
};

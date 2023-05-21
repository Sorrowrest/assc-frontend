import axios, { AxiosResponse } from "axios";
import {
  SignInRequest,
  TUser,
  UserUpdateRequest,
} from "@app/modules/auth/auth.type";

export const getAuth = async (token?: string | null) => {
  try {
    return (await axios.get("profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })) as AxiosResponse<TUser>;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const signIn = async (data: SignInRequest) => {
  const response = await axios.post<{ access_token: string }>(
    "auth/login",
    data
  );
  return response.data.access_token;
};

export const editAvatar = async (photo: File) => {
  const formData = new FormData();
  formData.append("files", photo);
  const response = await axios.post<{ access_token: string }>(
    "users/avatar",
    formData
  );
  return response;
};

export const updateUser = async (data: UserUpdateRequest) => {
  const response = await axios.put<TUser>("users", data);
  return response;
};

export const updatePassword = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await axios.put<TUser>("users/change-password", data);
  return response;
};

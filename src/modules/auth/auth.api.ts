import axios, { AxiosResponse } from "axios";
import { SignInRequest, UserUpdateRequest } from "@app/modules/auth/auth.type";
import { User } from "@core/models/User";

export const getAuth = async (token?: string | null) => {
  try {
    return (await axios.get("profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })) as AxiosResponse<User>;
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
  const response = await axios.put<User>("users", data);
  return response;
};

export const updatePassword = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await axios.put<User>("users/change-password", data);
  return response;
};

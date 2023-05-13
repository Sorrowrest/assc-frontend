import axios, { AxiosResponse } from "axios";
import { SignInRequest } from "@app/modules/auth/auth.type";
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
  try {
    const response = await axios.post<{ access_token: string }>(
      "auth/login",
      data
    );
    return response.data.access_token;
  } catch (e) {
    console.error(e);
  }
};

export const editAvatar = async (photo: File) => {
  try {
    const formData = new FormData();
    formData.append("files", photo);
    const response = await axios.post<{ access_token: string }>(
      "users/avatar",
      formData
    );
    return response;
  } catch (e) {
    console.error(e);
  }
};

import { useMutation, useQuery } from "@tanstack/react-query";
import { editAvatar, getAuth, updatePassword, updateUser } from "../auth.api";
import {
  ProfileStateProps,
  useProfileStore,
} from "@app/modules/auth/store/profile";
import { User } from "@app/core/models/User";
import { AxiosResponse } from "axios";
import { STALE_TIME } from "@core/services";
import { UserUpdateRequest } from "@app/modules/auth/auth.type";

const onError = (removeAll: ProfileStateProps["removeAll"]) => {
  removeAll();
};

export const useProfile = () => {
  const { accessToken, setProfile, removeAll } = useProfileStore();

  const { data, isLoading, refetch } = useQuery<
    AxiosResponse<User> | null,
    Error
  >(["profile"], () => getAuth(accessToken), {
    onError: () => onError(removeAll),
    onSuccess: (dt) => dt && setProfile(dt.data),
    enabled: !!accessToken,
    staleTime: STALE_TIME,
  });

  const handleUpdateAvatar = useMutation(
    ["profile"],
    async (photo: File) => await editAvatar(photo),
    {
      onSuccess: () => refetch(),
    }
  );

  const handleUpdateUser = useMutation(
    ["profile"],
    async (data: UserUpdateRequest) => await updateUser(data),
    {
      onSuccess: () => refetch(),
    }
  );

  const handleUpdatePassword = useMutation(
    ["profile"],
    async (data: { oldPassword: string; newPassword: string }) =>
      await updatePassword(data),
    {
      onSuccess: () => refetch(),
    }
  );

  if (!accessToken)
    return {
      isLoading: false,
      data: null,
    };

  return {
    data,
    isLoading,
    handleUpdateUser,
    handleUpdateAvatar,
    handleUpdatePassword,
  };
};

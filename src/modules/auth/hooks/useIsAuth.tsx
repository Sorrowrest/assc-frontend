import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../auth.api";
import {
  ProfileStateProps,
  useProfileStore,
} from "@app/modules/auth/store/profile";
import { User } from "@app/core/models/User";
import { AxiosResponse } from "axios";

const onError = (removeAll: ProfileStateProps["removeAll"]) => {
  removeAll();
};

export const useIsAuth = () => {
  const { accessToken, setProfile, removeAll } = useProfileStore();

  const { data, isLoading } = useQuery<AxiosResponse<User> | null, Error>(
    ["profile"],
    () => getAuth(accessToken),
    {
      onError: () => onError(removeAll),
      onSuccess: (dt) => dt && setProfile(dt.data),
      enabled: !!accessToken,
    }
  );

  if (!accessToken)
    return {
      isLoading: false,
      data: null,
    };

  return { data, isLoading };
};

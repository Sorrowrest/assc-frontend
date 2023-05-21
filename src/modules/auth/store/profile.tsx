import { TUser } from "@app/modules/auth/auth.type";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ProfileStateProps = {
  profile: TUser | null;
  accessToken: string | null;
  setProfile: (profile: TUser | null) => void;
  setAccessToken: (token: string | null) => void;
  removeAll: () => void;
};

export const useProfileStore = create<ProfileStateProps>()(
  devtools(
    persist(
      (set) => ({
        profile: null,
        accessToken: null,
        setProfile: (data) => set((state) => ({ ...state, profile: data })),
        setAccessToken: (data) =>
          set((state) => ({ ...state, accessToken: data })),
        removeAll: () =>
          set((state) => ({ ...state, accessToken: null, profile: null })),
      }),
      {
        name: "profile-storage",
      }
    )
  )
);

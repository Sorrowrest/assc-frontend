import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";

export const store = configureStore({
  devTools: true,
  reducer: {
    user,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(),
});

export type AppState = ReturnType<typeof store.getState>;

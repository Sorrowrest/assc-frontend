import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
import eventsApi from "./events";
import { API_REDUCERS_ENUM } from "./reducers";

export const store = configureStore({
  devTools: true,
  reducer: {
    user,
    [API_REDUCERS_ENUM.EVENTS]: eventsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat([
      eventsApi.middleware,
    ]),
});

export type AppState = ReturnType<typeof store.getState>;

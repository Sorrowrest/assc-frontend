import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosResponse } from "axios";
import { API_REDUCERS_ENUM } from "../reducers";
import { axiosBaseQuery } from "../../services/api";
import Event from "../../models/Event";
import { RegisterEventCRUDRequest } from "../../types/requests";

export const eventsApi = createApi({
  reducerPath: API_REDUCERS_ENUM.EVENTS,
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Events"],
  endpoints: (build) => ({
    getEventsList: build.query<AxiosResponse<Event[]>, any>({
      query: ({ expand, filters, ...params }) => ({
        url: "events/",
        method: "GET",
        params: {
          expand: expand?.join(","),
          ...filters,
          ...params,
        },
      }),
      transformResponse: (response: AxiosResponse<Event[]>) => {
        response.data = response.data.map((u) => new Event(u));
        return response;
      },
      providesTags: (res) =>
        res?.data.length
          ? [...res.data.map(({ _id }) => ({ type: "Events", _id } as const))]
          : [{ type: "Events", id: "LIST" }],
    }),
    unRegisterEvent: build.mutation<
      AxiosResponse<Event>,
      RegisterEventCRUDRequest
    >({
      query: (data) => ({
        url: "events/unregister",
        method: "POST",
        data,
      }),
      invalidatesTags: (res) => [{ type: "Events", id: res?.data._id }],
    }),
    registerEvent: build.mutation<
      AxiosResponse<Event>,
      RegisterEventCRUDRequest
    >({
      query: (data) => ({
        url: "events/register",
        method: "POST",
        data,
      }),
      invalidatesTags: (res) => [{ type: "Events", id: res?.data._id }],
    }),
  }),
});

export const {
  useGetEventsListQuery,
  useLazyGetEventsListQuery,
  useRegisterEventMutation,
  useUnRegisterEventMutation,
} = eventsApi;

export default eventsApi;

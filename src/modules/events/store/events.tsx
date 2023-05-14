import { Event } from "../events.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type EventsStateProps = {
  events: Event[] | null;
  setEvents: (events: Event[] | null) => void;
  removeEvents: () => void;
};

export const useEventsStore = create<EventsStateProps>()(
  devtools((set) => ({
    events: null,
    setEvents: (events) => set((state) => ({ ...state, events })),
    removeEvents: () => set((state) => ({ ...state, events: [] })),
  }))
);

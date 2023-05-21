import { TEvent } from "../events.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type EventsStateProps = {
  events: TEvent[] | null;
  setEvents: (events: TEvent[] | null) => void;
  removeEvents: () => void;
};

export const useEventsStore = create<EventsStateProps>()(
  devtools((set) => ({
    events: null,
    setEvents: (events) => set((state) => ({ ...state, events })),
    removeEvents: () => set((state) => ({ ...state, events: [] })),
  }))
);

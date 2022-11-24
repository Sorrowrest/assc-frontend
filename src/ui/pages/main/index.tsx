import * as React from "react";
import Container from "@mui/material/Container";
import {
  useGetEventsListQuery,
  useRegisterEventMutation,
  useUnRegisterEventMutation,
} from "../../../core/store/events";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { userStateSelector } from "../../../core/store/user/selectors";
import { Button } from "@mui/material";
import Event from "../../../core/models/Event";

export const MainScreen = () => {
  const { user } = useSelector(userStateSelector);
  const eventsResponse = useGetEventsListQuery({});
  const events = eventsResponse.data ? eventsResponse.data.data : [];
  const [registerEvent] = useRegisterEventMutation();
  const [unRegisterEvent] = useUnRegisterEventMutation();

  const handleRegisterEvent = async (event: Event) => {
    console.log(user);
    console.log(event.members, event.isEventMember(user._id));
    if (event.isEventMember(user._id)) {
      return await unRegisterEvent({
        _id: event._id,
        userId: user._id,
      });
    }

    return await registerEvent({
      _id: event._id,
      userId: user._id,
    });
  };

  return (
    <Container component="main">
      {events.map((event) => (
        <div key={event._id} className={styles.blockItem}>
          {event.title}
          <div>{event.members.length} участников</div>
          <Button onClick={() => handleRegisterEvent(event)}>
            {event.isEventMember(user._id) ? "Отписаться" : "Записаться"}
          </Button>
        </div>
      ))}
    </Container>
  );
};

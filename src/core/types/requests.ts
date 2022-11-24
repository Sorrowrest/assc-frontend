import Event from "../models/Event";
import User from "../models/User";

export interface RegisterEventCRUDRequest {
  _id: Event["_id"];
  userId: User["_id"];
}

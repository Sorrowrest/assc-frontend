import Event from "../Event";

export interface User {
  _id: string;
  events: Event[];
  avatar: string;
  firstName: string;
  lastName: string;
  secondName: string;
  gender: string;
  birthday: Date;
  phone: string;
  clothingSize: string;
  email: string;
  userName: string;
  __v: number;
}

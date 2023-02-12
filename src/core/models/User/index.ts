import Event from "../Event";

export interface User {
  _id: string;
  events: Event[];
  _clubId: null;
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

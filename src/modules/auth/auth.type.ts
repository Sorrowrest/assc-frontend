import { BaseModel } from "sjs-base-model";
import { Event } from "@app/modules/events/events.type";

export type SignInRequest = {
  username: string;
  password: string;
};

export class User extends BaseModel {
  public _id = "";
  public events: Event[] = [];
  public userName = "";
  public email = "";
  public password = "";
  public firstName = "";
  public lastName = "";
  public secondName = "";
  public gender: "male" | "female" = "male";
  public birthday: Date = new Date();
  public phone = "";

  constructor(data: User) {
    super();
    this.update(data);
  }

  update(data: User) {
    super.update(data);
  }
}

export type UserUpdateRequest = Omit<
  User,
  "password" | "events" | "birthday"
> & {
  birthday: number;
};

import { BaseModel } from "sjs-base-model";
import { TEvent } from "@app/modules/events/events.type";

export type SignInRequest = {
  username: string;
  password: string;
};

export enum Role {
  User = "user",
  Admin = "admin",
  TalonsMan = "talonsMan",
}

export class TUser extends BaseModel {
  public _id = "";
  public events: TEvent[] = [];
  public userName = "";
  public email = "";
  public password = "";
  public firstName = "";
  public lastName = "";
  public secondName = "";
  public avatar = "";
  public gender: "male" | "female" = "male";
  public birthday: Date = new Date();
  public phone = "";
  public role: Role = Role.User;

  constructor(data: TUser) {
    super();
    this.update(data);
  }

  update(data: TUser) {
    super.update(data);
  }
}

export type UserUpdateRequest = Omit<
  TUser,
  "password" | "events" | "birthday"
> & {
  birthday: number;
};

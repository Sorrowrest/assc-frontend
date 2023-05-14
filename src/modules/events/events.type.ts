import { BaseModel } from "sjs-base-model";
import { User } from "@app/modules/auth/auth.type";

export class Event extends BaseModel {
  public _id = "";
  public author: Partial<User> = {};
  public title = "";
  public isEat = false;
  public description = "";
  public photos: string[] = [];
  public dateStart: Date = new Date();
  public dateEnd: Date = new Date();
  public category = "";
  public members: User[] = [];
  public isPublished = false;

  constructor(data: Event) {
    super();
    this.update(data);
  }

  update(data: Event) {
    super.update(data);
  }
}

export type TRegisterEvent = {
  _id: string;
  userId: string;
};

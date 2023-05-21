import { BaseModel } from "sjs-base-model";
import { TUser } from "@app/modules/auth/auth.type";

export class TEvent extends BaseModel {
  public _id = "";
  public author: Partial<TUser> = {};
  public title = "";
  public isEat = false;
  public description = "";
  public photos: string[] = [];
  public dateStart: Date = new Date();
  public dateEnd: Date = new Date();
  public category: "sport" | "eat" = "sport";
  public members: TUser[] = [];
  public isPublished = false;

  constructor(data: Partial<TEvent>) {
    super();
    this.update(data);
  }

  update(data: Partial<TEvent>) {
    super.update(data);
  }
}

export type TRegisterEvent = {
  _id: string;
  userId: string;
};

export type TUpdateEvent = {
  _id: string;
  title: string;
  description: string;
  dateStart: number;
  dateEnd: number;
};

export type TDeleteEvent = { id: string };

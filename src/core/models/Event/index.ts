import { BaseModel } from "sjs-base-model";
import User from "../User";

export default class Event extends BaseModel {
  public _id: string = "";
  public title: string = "";
  public description: string = "";
  public photos: string[] = [];
  public date: Date = new Date();
  public category: string = "";
  public members: User[] = [];
  public author: User | null = null;

  public isEventMember(_id: User["_id"]) {
    return !!this.members.find((member) => member._id === _id);
  }

  constructor(data: Partial<Event>) {
    super({ expand: true });
    this.update(data);
  }
}

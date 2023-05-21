import { BaseModel } from "sjs-base-model";

export type TransferElement = {
  busName: string;
  number: string;
  contact: string;
  time: string;
};

export class TTransfer extends BaseModel {
  public _id = "";
  public title = "";
  public transfers: TransferElement[] = [];
  public dayType: "checkin" | "checkout" = "checkin";

  constructor(data: TTransfer) {
    super();
    this.update(data);
  }

  update(data: TTransfer) {
    super.update(data);
  }
}

export type TUpdateTransfer = Partial<TTransfer>;

export type TDeleteTransfer = { id: string };

import { Bag } from "../bag";

export interface ArrivalPost {
  labelName?: string;
  arrivalDate?: string;
  status?: string;
  bagPrice?: number;
  bag?: Bag;
}

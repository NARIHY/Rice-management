import { Bag } from "./bag";

export interface Arrival {
  readonly id?: number;
  labelName?: string;
  arrivalDate?: string;
  bagPrice?: number;
  createdAt?: string | null;
  bag?: Bag;
}

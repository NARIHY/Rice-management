import { Stock } from "./stock";

export interface Bag {
  readonly id?: number;
  quantity?: string;
  stock?: Array<Stock>;
}

import { CinProvenance } from "./cinProvenance";
import { Gender } from "./gender";
import { User } from "./user";

/**
 * Client representation
 */
export interface Client {
  readonly id?: number;
  name: string;
  lastName: string;
  cin: string;
  address: string;
  gender?: Gender | null;
  user?: User | null;
  cin_provenance?: CinProvenance | null;
}

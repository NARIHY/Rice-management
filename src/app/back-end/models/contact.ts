/**
 * Contact representation
 */
export interface Contact {
  readonly id?: number;
  name?: string;
  lastName?: string;
  email?: string | null;
  phoneNumber?: string | null;
  creationDate?: string;
}

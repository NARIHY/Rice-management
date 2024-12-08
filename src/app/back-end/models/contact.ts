/**
 * Contact representation
 */
export interface Contact {
  readonly id?: number;
  name?: string;
  lastName?: string;
  email?: string | null;
  phoneNumber?: string | null;
  subject?: string | null;
  message?: string | null;
  creationDate?: string;
}

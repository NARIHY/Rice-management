import { Client } from "./client";

/**
 * User representation representation
 */
export interface User {
  readonly id?: number;
  email?: string;
  /**
   * The user roles
   */
  roles?: Array<string>;
  createdAt?: string | null;
  updatedAt?: string | null;
  client?: Client | null;
}

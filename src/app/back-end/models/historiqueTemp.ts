/**
 * Transaction historiques in our application
 */
export interface HistoriqueTemps {
  readonly id?: number;
  nomTable?: string | null;
  action?: string | null;
  details?: string | null;
  date_action?: string | null;
  dateAction?: string | null;
}

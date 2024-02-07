export class Loan {
  id: number = 0;
  book_id: number = 0;
  client_id: number = 0;
  loan_date?: Date;
  loan_days: number = 0;
  status: string = "";
  updated_at?: Date;
  created_at?: Date;
}

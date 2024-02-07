import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../models/loan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private urlBase = "http://localhost:8000/api/v1/loans"
  constructor(private clientHttp: HttpClient) { }
  obtainLoanList(): Observable<Loan[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(map
        (response => response.data.map((loan: Loan) => ({
          id: loan.id,
          book_id: loan.book_id,
          client_id: loan.client_id,
          loan_date: loan.loan_date,
          loan_days: loan.loan_days,
          status: loan.status,
          updated_at: loan.updated_at,
          created_at: loan.created_at
        })))
      );
  }
}

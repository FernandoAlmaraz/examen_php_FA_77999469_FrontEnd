import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../models/loan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateFormaterService } from './date-formater.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private urlBase = "http://localhost:8000/api/v1/loans"
  constructor(private clientHttp: HttpClient,
    private formater: DateFormaterService) { }
  obtainLoanList(): Observable<Loan[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(map
        (response => response.data.map((loan: Loan) => ({
          id: loan.id,
          book_id: loan.book_id,
          client_id: loan.client_id,
          loan_date: loan.loan_date ? this.formater.formatDate(new Date(loan.loan_date)) : null,
          loan_days: loan.loan_days,
          status: loan.status,
          updated_at: loan.updated_at ? this.formater.formatDate(new Date(loan.updated_at)) : null,
          created_at: loan.created_at ? this.formater.formatDate(new Date(loan.created_at)) : null
        })))
      );
  }
  addLoan(loan: Loan): Observable<Loan> {
    return this.clientHttp.post<Loan>(this.urlBase, loan);
  }
  overdueReport(): Observable<object[]> {
    return this.clientHttp.get<any>("http://localhost:8000/api/v1/overdueLoans")
  }
}

import { Component } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent {
  loans: Loan[] = [];
  constructor(private service: LoanService) {
  }
  ngOnInit() {
    this.obtainLoans();
  }
  private obtainLoans() {
    this.service.obtainLoanList().subscribe(
      ((data) => {
        this.loans = data;
      })
    );
  }
}

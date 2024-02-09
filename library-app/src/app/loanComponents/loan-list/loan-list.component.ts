import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent {
  loans: Loan[] = [];
  constructor(private service: LoanService,
    private router: Router) {
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
  editLoan(id: number) {
    this.router.navigate(['edit-loan', id])
  }
}

import { Component } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-report-loans',
  templateUrl: './report-loans.component.html',
  styleUrls: ['./report-loans.component.css']
})
export class ReportLoansComponent {
  objets: any;
  constructor(private service: LoanService) {
  }
  ngOnInit() {
    this.obtainLoansOverdue();
  }
  private obtainLoansOverdue() {
    this.service.overdueReport().subscribe(
      ((data) => {
        this.objets = data;
      })
    );
  }
}

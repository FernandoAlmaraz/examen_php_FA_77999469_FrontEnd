import { Component } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-report-monthly',
  templateUrl: './report-monthly.component.html',
  styleUrls: ['./report-monthly.component.css']
})
export class ReportMonthlyComponent {
  objets: any;
  constructor(private service: LoanService) {
  }
  ngOnInit() {
    this.obtainMonthlyReport();
  }
  private obtainMonthlyReport() {
    this.service.montlhyReport().subscribe(
      ((data) => {
        this.objets = data;
      })
    );
  }
}

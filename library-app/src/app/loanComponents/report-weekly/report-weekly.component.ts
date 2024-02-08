import { Component } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-report-weekly',
  templateUrl: './report-weekly.component.html',
  styleUrls: ['./report-weekly.component.css']
})
export class ReportWeeklyComponent {
  objets: any;
  constructor(private service: LoanService) {
  }
  ngOnInit() {
    this.obtainWeeklyReport();
  }
  private obtainWeeklyReport() {
    this.service.weeklyReport().subscribe(
      ((data) => {
        this.objets = data;
      })
    );
  }
}

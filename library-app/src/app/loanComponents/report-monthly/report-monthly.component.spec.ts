import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMonthlyComponent } from './report-monthly.component';

describe('ReportMonthlyComponent', () => {
  let component: ReportMonthlyComponent;
  let fixture: ComponentFixture<ReportMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportMonthlyComponent]
    });
    fixture = TestBed.createComponent(ReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

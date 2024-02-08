import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLoansComponent } from './report-loans.component';

describe('ReportLoansComponent', () => {
  let component: ReportLoansComponent;
  let fixture: ComponentFixture<ReportLoansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportLoansComponent]
    });
    fixture = TestBed.createComponent(ReportLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

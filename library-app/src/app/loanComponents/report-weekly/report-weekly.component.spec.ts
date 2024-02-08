import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWeeklyComponent } from './report-weekly.component';

describe('ReportWeeklyComponent', () => {
  let component: ReportWeeklyComponent;
  let fixture: ComponentFixture<ReportWeeklyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportWeeklyComponent]
    });
    fixture = TestBed.createComponent(ReportWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

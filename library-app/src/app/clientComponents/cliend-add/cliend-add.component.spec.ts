import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliendAddComponent } from './cliend-add.component';

describe('CliendAddComponent', () => {
  let component: CliendAddComponent;
  let fixture: ComponentFixture<CliendAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliendAddComponent]
    });
    fixture = TestBed.createComponent(CliendAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

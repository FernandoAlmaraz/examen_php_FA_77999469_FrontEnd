import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEditComponent } from './autor-edit.component';

describe('AutorEditComponent', () => {
  let component: AutorEditComponent;
  let fixture: ComponentFixture<AutorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorEditComponent]
    });
    fixture = TestBed.createComponent(AutorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorAddComponent } from './autor-add.component';

describe('AutorAddComponent', () => {
  let component: AutorAddComponent;
  let fixture: ComponentFixture<AutorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorAddComponent]
    });
    fixture = TestBed.createComponent(AutorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

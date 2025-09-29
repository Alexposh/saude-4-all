import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPatientPage } from './register-patient.page';

describe('RegisterPatientPage', () => {
  let component: RegisterPatientPage;
  let fixture: ComponentFixture<RegisterPatientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

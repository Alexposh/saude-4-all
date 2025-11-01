import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientEditPage } from './patient-edit.page';

describe('PatientEditPage', () => {
  let component: PatientEditPage;
  let fixture: ComponentFixture<PatientEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

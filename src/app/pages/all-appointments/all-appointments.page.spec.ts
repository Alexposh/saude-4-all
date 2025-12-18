import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllAppointmentsPage } from './all-appointments.page';

describe('AllAppointmentsPage', () => {
  let component: AllAppointmentsPage;
  let fixture: ComponentFixture<AllAppointmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

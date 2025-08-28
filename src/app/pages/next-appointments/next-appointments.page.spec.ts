import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextAppointmentsPage } from './next-appointments.page';

describe('NextAppointmentsPage', () => {
  let component: NextAppointmentsPage;
  let fixture: ComponentFixture<NextAppointmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

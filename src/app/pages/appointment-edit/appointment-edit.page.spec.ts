import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentEditPage } from './appointment-edit.page';

describe('AppointmentEditPage', () => {
  let component: AppointmentEditPage;
  let fixture: ComponentFixture<AppointmentEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

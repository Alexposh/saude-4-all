import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentCreatePage } from './appointment-create.page';

describe('AppointmentCreatePage', () => {
  let component: AppointmentCreatePage;
  let fixture: ComponentFixture<AppointmentCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

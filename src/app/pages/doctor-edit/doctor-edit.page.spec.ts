import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorEditPage } from './doctor-edit.page';

describe('DoctorEditPage', () => {
  let component: DoctorEditPage;
  let fixture: ComponentFixture<DoctorEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

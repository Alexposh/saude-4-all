import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
import { Location } from 'src/app/models/location';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
  imports: [IonicModule, HeaderComponent, FormsModule, ReactiveFormsModule],
})
export class CreateAppointmentPage implements OnInit {
  private doctorSevice = inject(DoctorService);
  private locationService = inject(LocationService);
  private appointmentService = inject(AppointmentService);
  private route = inject(ActivatedRoute);

  constructor() {}
  patientId: string | null = '';
  allDoctors: Doctor[] = [];
  allSpecialities: string[] = [];
  allLocations: any[] = []; // check this in detail later
  selectedDate: string = '';

  ngOnInit() {
    this.getAllDoctors();
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getAllLocations();
    this.getAllSpecialities();
    console.log(this.allDoctors);
    console.log(this.allLocations);
  }

  creationForm = new FormGroup({
    doctor: new FormControl(''),
    speciality: new FormControl(''),
    location: new FormControl(''),
    date: new FormControl(),
    // date: ['']
  });

  getAllDoctors(): void {
    this.doctorSevice.getAllDoctors().subscribe({
      next: (doctors: Doctor[]) => {
        this.allDoctors = doctors;
        console.log(doctors);
      },
      error: (err) => {
        console.log('Error getting the doctors: ' + err);
      },
    });
  }

  getAllLocations(): void {
    this.locationService.getAllLocations().subscribe({
      next: (locations) => {
        this.allLocations = locations;
        console.log(locations);
      },
      error: (err) => {
        console.log('Error getting the locations: ' + err);
      },
    });
  }

  getAllSpecialities(): void {
    this.doctorSevice.getAllSpecialities().subscribe({
      next: (specialities) => {
        this.allSpecialities = specialities;
        console.log(this.allSpecialities);
      },
      error: (err) => {
        console.log('Error getting the specialities');
      },
    });
  }
  onSubmit(event: Event) {
    console.log('This should submit the form');
  }

  onDateChange(event: any) {
    console.log('Date changed:', this.selectedDate);
    this.creationForm.value.date = event.detail.value;
  }
  submit() {
    // let date = this.selectedDate;
    if (this.route.snapshot.paramMap.get('id')) {
      let appointmentContent = {
        doctorId: this.creationForm.value.doctor as string,
        patientId: this.route.snapshot.paramMap.get('id'),
        locationId: this.creationForm.value.location as string,
        dateOfAppointment: this.creationForm.value.date,
      };
      console.log('Submit the form');
      // console.log(this.creationForm);
      console.log(appointmentContent);
      this.appointmentService.createAppointment(appointmentContent);
    }
  }
}

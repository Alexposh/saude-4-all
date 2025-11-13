import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonItem, IonList } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { Doctor } from 'src/app/models/doctor';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Specialization } from 'src/app/models/specialization';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Gender } from 'src/app/models/gender';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.page.html',
  styleUrls: ['./appointment-create.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class AppointmentCreatePage implements OnInit {
  private sharedService = inject(SharedService);
  private doctorService = inject(DoctorService);

  doctors:Doctor[]=[];
  filteredDoctors :Doctor[] = [];
  specializations : Specialization[] = [];
  locations = [];
  genders : string[] = ["Male", "Female", "Doesn't matter"];

  constructor() { }

  appointmentCreationForm = new FormGroup({
    specialization: new FormControl(''),
    gender:new FormControl(''),
    doctor_id: new FormControl(''),
    patient_id: new FormControl(''),
    location_id: new FormControl(''),
    date: new FormControl('')
  });

  ngOnInit() {
    this.getSpecializations();
    this.getDoctors();
  }

  getSpecializations() {
      this.sharedService.getAllSpecializations().subscribe({
        next: (specializations: Specialization[]) => {
          this.specializations = specializations;
          console.log('Specializations loaded:', this.specializations);
        },
        error: (err) => {
          console.log('Error getting the list of specializations' + err);
        },
      });
    }

  getDoctors() {
    this.doctorService.getAllDoctors().subscribe({
      next: (doctors) => {
        this.doctors = doctors;
        console.log(this.doctors);        
      },
      error: (err) => {
        console.log(
          'An error was encountered when retrieving the doctors: ' + err
        );
      },
    });
  }
  


  onSubmit(){
    console.log("Submit the form:" + this.appointmentCreationForm.value);
  }
}

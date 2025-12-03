import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonItem, IonList } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { Doctor } from 'src/app/models/doctor';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Specialization } from 'src/app/models/specialization';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Gender } from 'src/app/models/gender';
import { Location } from 'src/app/models/location'
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Appointment } from 'src/app/models/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { AppointmentDto } from 'src/app/models/appointmentDto';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.page.html',
  styleUrls: ['./appointment-create.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class AppointmentCreatePage implements OnInit {
  private sharedService = inject(SharedService);
  private doctorService = inject(DoctorService);
  private appointmentService = inject(AppointmentService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  doctors:Doctor[]=[];
  filteredDoctors :Doctor[] = [];
  specializations : Specialization[] = [];
  locations: Location[] = [];
  genders : string[] = ["Male", "Female", "Doesn't matter"];
  patientId: string | null = '';
  selectedGender : string = "";

  constructor() { }

  appointmentCreationForm = new FormGroup({
    specialization: new FormControl(''),
    gender:new FormControl(''),
    doctor_id: new FormControl(''),
    location_id: new FormControl(''),
    date: new FormControl('')
  });

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getSpecializations();
    this.getDoctors();
    this.getClinics();
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

  getClinics(){
    this.sharedService.getAllLocations().subscribe({
      next: (clinics:Location[]) =>{
        this.locations = clinics;
      },
      error: (err)=>{
        console.log("Couldn't load the locations: " + err);
      }
    })
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
    const appointmentDataForScheduling:AppointmentDto = {
      // id: this.doctorId!,
      doctorId: this.appointmentCreationForm.value.doctor_id!,
      patientId: this.patientId,
      locationId: this.appointmentCreationForm.value.location_id!,
      dateOfAppointment: this.appointmentCreationForm.value.date!,
    };

    console.log(appointmentDataForScheduling);
    this.appointmentService.createAppointment(appointmentDataForScheduling).subscribe({
      next: (response) =>{
        console.log("Scheduled succesfully, you will receive a confirmaton afte the doctor validates.");
        this.router.navigate(['/patient-home', this.patientId]);
      },
      error: (err) =>{
        console.log("Eroror while scheduling:" + err);
      }
    })
  }
}

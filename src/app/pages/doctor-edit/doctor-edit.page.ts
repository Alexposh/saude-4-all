import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Gender } from 'src/app/models/gender';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.page.html',
  styleUrls: ['./doctor-edit.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class DoctorEditPage implements OnInit {
  genders: Gender[] = [];
  doctorId: string | null = '';
  private route = inject(ActivatedRoute);
  private patientService = inject(PatientService);
  private doctorService = inject(DoctorService);
  private router = inject(Router);

  doctor: Doctor = {
      id: '',
      firstName: '',
      lastName: '',
      image: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      specialization:''
    };

  constructor() { }


  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    // console.log(this.patientId);
    this.getGenders();
    this.getDoctor(this.doctorId as string);
  }
  onSubmit() {
    const formData = this.doctorEditForm.value;
    console.log('Form for doctor edit:', formData);
    this.updateDoctor();
  }

  doctorEditForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    image: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    specialization: new FormControl('')
  });

  getGenders() {
    this.patientService.getAllGenders().subscribe({
      next: (genders: Gender[]) => {
        this.genders = genders;
        console.log('Genders loaded:', this.genders);
      },
      error: (err) => {
        console.log('Error collecting the genders:' + err);
      },
    });
  
  }

  getDoctor(idOfDoctor: string) {
    this.doctorService.getDoctorById(idOfDoctor).subscribe({
      next: (doctor) => {
        this.doctor = doctor;
        console.log(this.doctor);
        this.doctorEditForm.patchValue({
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          image: doctor.image,
          dateOfBirth: doctor.dateOfBirth,
          specialization: doctor.specialization,
          gender: doctor.gender,
          email: doctor.email,
        });
      },
      error: (err) => {
        console.log(
          'An error was encountered when retrieving the doctor: ' + err
        );
      },
    });
  }
 
  updateDoctor() {
      // if(this.changePhoto){
      //   this.imageUrl = `${this.standardPhotoUrl}${this.patientEditForm.value.newImage!}`
      //   this.changePhoto = !this.changePhoto;
      // }
      // console.log(this.patient.email);
      const newDataForDoctor: Doctor = {
        id: this.doctorId!,
        firstName: this.doctorEditForm.value.firstName!,
        lastName: this.doctorEditForm.value.lastName!,
        image: this.doctorEditForm.value.image!,
        dateOfBirth: this.doctorEditForm.value.dateOfBirth!,
        gender: this.doctorEditForm.value.gender!,
        email: this.doctorEditForm.value.email!,
        specialization: this.doctorEditForm.value.specialization!
      };
      console.log(newDataForDoctor);
  
      this.doctorService.updateDoctor(newDataForDoctor).subscribe({
        next: (updatedDoctor: Doctor) => {
          this.doctor = updatedDoctor;
          console.log('new doctor structure: ' + updatedDoctor);
          this.getDoctor(updatedDoctor.id);
          this.router.navigate(['/doctor-home', this.doctor.id]);
        },
        error: (error) => {
          console.log('Error getting the newly updated Doctor: ' + error);
        },
      });
    }

  

}

import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Gender } from 'src/app/models/gender';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization } from 'src/app/models/specialization';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.page.html',
  styleUrls: ['./doctor-edit.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class DoctorEditPage implements OnInit {
  genders: Gender[] = [];
  specializations: Specialization[] = [];
  doctorId: string | null = '';
  private route = inject(ActivatedRoute);
  private sharedService = inject(SharedService);
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
    specialization: '',
  };

  changePhoto: boolean = false;
  private standardPhotoUrl: string =
    'https://awkward-turquoise-hawk.myfilebase.com/ipfs/';
  imageUrl: string | null = null;

  constructor() {}

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    this.getGenders();
    this.getSpecializations();
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
    gender: new FormControl(''),
    email: new FormControl(''),
    specialization: new FormControl(''),
    newImage: new FormControl(''),
  });

  getGenders() {
    this.sharedService.getAllGenders().subscribe({
      next: (genders: Gender[]) => {
        this.genders = genders;
        console.log('Genders loaded:', this.genders);
      },
      error: (err) => {
        console.log('Error collecting the genders:' + err);
      },
    });
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
    if (this.changePhoto) {
      this.imageUrl = `${this.standardPhotoUrl}${this.doctorEditForm.value
        .newImage!}`;
      this.changePhoto = !this.changePhoto;
    }

    const newDataForDoctor: Doctor = {
      id: this.doctorId!,
      firstName: this.doctorEditForm.value.firstName!,
      lastName: this.doctorEditForm.value.lastName!,
      image: this.imageUrl!,
      dateOfBirth: this.doctorEditForm.value.dateOfBirth!,
      gender: this.doctorEditForm.value.gender!,
      email: this.doctorEditForm.value.email!,
      specialization: this.doctorEditForm.value.specialization!,
    };
    console.log(newDataForDoctor);

    this.doctorService.updateDoctor(newDataForDoctor).subscribe({
      next: (updatedDoctor: Doctor) => {
        this.doctor = updatedDoctor;
        console.log('new doctor structure: ' + updatedDoctor);
        this.getDoctor(updatedDoctor.id);
        // this.router.navigate(['/doctor-profile', this.doctor.id]);
      },
      error: (error) => {
        console.log('Error getting the newly updated Doctor: ' + error);
      },
    });
  }

  setNewPhoto() {
    this.changePhoto = !this.changePhoto;
  }
}

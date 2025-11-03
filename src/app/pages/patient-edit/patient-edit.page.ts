import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { IonCardContent, IonContent, IonCard } from '@ionic/angular/standalone';
import { IonDatetime, IonicModule } from '@ionic/angular';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PatientService } from 'src/app/services/patient/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Gender } from 'src/app/models/gender';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.page.html',
  styleUrls: ['./patient-edit.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class PatientEditPage implements OnInit {
  private patientService = inject(PatientService);
  private route = inject(ActivatedRoute);
  private imageService = inject(ImageService);


  private standardPhotoUrl:string = 'https://awkward-turquoise-hawk.myfilebase.com/ipfs/';

  patientId: string | null = '';
  genders: Gender[] = [];
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  changePhoto:boolean = false;
  private router = inject(Router);


  previewUrl: string | ArrayBuffer | null = null;

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    image: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: '',
    email: '',
  };

  constructor() {}

  patientEditForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    image: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    newImage: new FormControl('')
  });

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    // console.log(this.patientId);
    this.getGenders();
    this.getPatient(this.patientId as string);
  }

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

  onSubmit() {
    const formData = this.patientEditForm.value;
    console.log('Form for patient edit:', formData);
    this.updatePatient();
  }

  updatePatient() {
    if(this.changePhoto){
      this.imageUrl = `${this.standardPhotoUrl}${this.patientEditForm.value.newImage!}`
      this.changePhoto = !this.changePhoto;
    }
    // console.log(this.patient.email);
    const newDataForPatient: Patient = {
      id: this.patientId!,
      firstName: this.patientEditForm.value.firstName!,
      lastName: this.patientEditForm.value.lastName!,
      image: this.imageUrl!,
      dateOfBirth: this.patientEditForm.value.dateOfBirth!,
      phoneNumber: this.patientEditForm.value.phoneNumber!,
      gender: this.patientEditForm.value.gender!,
      email: this.patient.email,
    };
    console.log(newDataForPatient);

    this.patientService.updatePatient(newDataForPatient).subscribe({
      next: (updatedPatient: Patient) => {
        this.patient = updatedPatient;
        console.log('new patient structure: ' + updatedPatient);
        this.getPatient(updatedPatient.id);
        this.router.navigate(['/patient-home', this.patient.id]);
      },
      error: (error) => {
        console.log('Error getting the newly updated Patient: ' + error);
      },
    });
  }

  getPatient(idOfPatient: string) {
    this.patientService.getPatientById(idOfPatient).subscribe({
      next: (patient) => {
        this.patient = patient;
        console.log(this.patient);
        this.patientEditForm.patchValue({
          firstName: patient.firstName,
          lastName: patient.lastName,
          image: patient.image,
          dateOfBirth: patient.dateOfBirth,
          phoneNumber: patient.phoneNumber,
          gender: patient.gender,
          email: patient.email,
        });
      },
      error: (err) => {
        console.log(
          'An error was encountered when retrieving the patient: ' + err
        );
      },
    });
  }
setNewPhoto(){
  this.changePhoto = !this.changePhoto;
  
  // this.patient.image = `${this.standardPhotoUrl}${this.patientEditForm.value.newImage}`
}
  
  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  // async onUpload(): Promise<void> {
  //   if (!this.selectedFile) return;

  //   try {
  //     const url = await this.imageService.uploadToFilebase(
  //       this.selectedFile,
  //       this.patient.id
  //     );
  //     this.imageUrl = url;
  //     console.log('Image uploaded:', url);
  //     // Send `url` to your backend to save in the database
  //   } catch (error) {
  //     console.error('Upload failed:', error);
  //   }
  // }
}

import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Gender } from 'src/app/models/gender';
import { ActivatedRoute } from '@angular/router';

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

  constructor() { }


  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    // console.log(this.patientId);
    // this.getGenders();
    // this.getDoctor(this.doctorId as string);
  }
  onSubmit() {
    const formData = this.doctorEditForm.value;
    console.log('Form for doctor edit:', formData);
    // this.updatePatient();
  }

  doctorEditForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    image: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
  });
 

  

}

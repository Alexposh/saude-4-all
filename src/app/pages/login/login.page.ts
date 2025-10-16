import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, HeaderComponent,ReactiveFormsModule],
})
export class LoginPage implements OnInit {

  private patientService = inject(PatientService);

  allPatients:any[] = [];

  constructor() { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);

  }

  showData(){
    console.log("before the test");
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);
    console.log("after the test");   
  }

  

  showAllPatients(){
    this.patientService.getAllPatients().subscribe(
      {
        next: (patients) => {
          console.log("show all patients");
          this.allPatients = patients;
        },
        error: (error) => {
          console.log("An error getting the patients" + error)
        }
      }
    )
  }
  
  ngOnInit() {
    this.showAllPatients();
  }

}

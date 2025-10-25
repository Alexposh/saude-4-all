import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { LoginPage } from '../login/login.page';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.page.html',
  styleUrls: ['./register-patient.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class RegisterPatientPage implements OnInit {
  private patientService = inject(PatientService);
  private loginService = inject(LoginService);

  constructor() { }

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)])

  });

  onSubmit() {
    const formData = this.registerForm.value;
    console.log('Form Data:', formData);
    // this.createPatient(); 

  }

  createPatient(){  
      if(this.registerForm.value.password === this.registerForm.value.passwordConfirm){
        let newPatient = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        role: "patient"
      };
      this.loginService.createPatient(newPatient).subscribe({
        next: (newPatientCreated) => {
            console.log("created patient: "+ newPatientCreated);         
    
          },
          error: () => {
            console.log("An error creating the patient")
          }
      })

      }
      
    }

    
  ngOnInit() {
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.page.html',
  styleUrls: ['./register-patient.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class RegisterPatientPage implements OnInit {
  private patientService = inject(PatientService);

  constructor() { }

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    iban: new FormControl('')
  });

  onSubmit() {
    const formData = this.registerForm.value;
    console.log('Form Data:', formData);
    this.createPatient(); 

  }

  createPatient(){  
      let newPatient = {
        name: this.registerForm.value.name!,
        dateOfBirth: this.registerForm.value.dateOfBirth!,
        iban: this.registerForm.value.iban!,
        contactDetails: this.registerForm.value.email!,
      };
  
      this.patientService.createPatient(newPatient).subscribe({
        next: () => {
            console.log("created patient: "+ newPatient.name);          
    
          },
          error: () => {
            console.log("An error creating the patient")
          }
      }  
      )
    }

    
  ngOnInit() {
  }

}

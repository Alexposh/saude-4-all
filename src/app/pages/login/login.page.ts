import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from 'src/app/services/patient/patient.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  private patientService = inject(PatientService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  allPatients: any[] = [];

  constructor() {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);
  }

  showData() {
    console.log('before the test');
    const formData = this.loginForm.value;
    console.log('Form Data from showData():', formData);
    console.log('after the test');
  }

  logInPatient() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value as { username: string; password: string };;
      this.loginService.searchPatient(formData).subscribe({
        next: (patient) => {
          this.router.navigate(['/patient-home',patient.id])
        },
        error: (error) => {
          console.log('There was an error finding the patient: ' + error);
        },
      });
    }  else {
    this.loginForm.markAllAsTouched();
  }  
  }

  // showAllPatients(){
  //   this.patientService.getAllPatients().subscribe(
  //     {
  //       next: (patients) => {
  //         console.log("show all patients");
  //         this.allPatients = patients;
  //         // console.log(this.allPatients);
  //       },
  //       error: (error) => {
  //         console.log("An error getting the patients" + error)
  //       }
  //     }
  //   )
  // }

  ngOnInit() {
    // this.showAllPatients();
  }
}

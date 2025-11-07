import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  private loginService = inject(LoginService);
  private router = inject(Router);

  userFound: User = { id: '', email: '', password: '', role: '' };

  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onSubmit() {
    const formData = this.loginForm.value as {
      email: string;
      password: string;
    };
    console.log('Form Data:', formData);
    this.logIn(formData);
  }

  showData() {
    console.log('before the test');
    const formData = this.loginForm.value;
    console.log('Form Data from showData():', formData);
    console.log('after the test');
  }

  logIn(formData: { email: string; password: string }) {
    if (this.loginForm.valid) {
      // const formData = this.loginForm.value as {email:string, password:string};
      this.loginService.searchPatient(formData).subscribe({
        next: (patient) => {
          this.router.navigate(['/patient-home', patient.id]);
        },
        error: (error) => {
          console.log('There was an error finding the patient: ' + error);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  registerPatient() {
    this.router.navigate(['/register-patient']);
  }

  registerNewUser(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    // this.showAllPatients();
  }


}

import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.page.html',
  styleUrls: ['./login-doctor.page.scss'],
  imports: [HeaderComponent, IonicModule, ReactiveFormsModule],
})
export class LoginDoctorPage implements OnInit {

  private loginService = inject(LoginService);
  private router = inject(Router);


  constructor() { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    const formData = this.loginForm.value as {email:string, password:string};
    console.log('Form Data:', formData);
    this.logIn(formData);
  }

  logIn(formData:{email:string, password:string}) {
  //   if (this.loginForm.valid) {
  //     // const formData = this.loginForm.value as {email:string, password:string};
  //     this.loginService.searchDoctor(formData).subscribe({
  //       next: (user) => {
  //          this.router.navigate(['/doctor-home', user.id])
  //       },
  //       error: (error) => {
  //         console.log('There was an error finding the patient: ' + error);
  //       },
  //     });
  //   }  else {
  //   this.loginForm.markAllAsTouched();
  // }  
  }
 

  registerDoctor(){
    this.router.navigate(['/register-doctor'])
  }

}

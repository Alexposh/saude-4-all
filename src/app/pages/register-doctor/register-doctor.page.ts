import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonButton, IonCard } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.page.html',
  styleUrls: ['./register-doctor.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class RegisterDoctorPage implements OnInit {
  private doctorService = inject(DoctorService);
  private loginService = inject(LoginService);
  private router = inject(Router);
  
  constructor() { }

 registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  onSubmit() {
    const formData = this.registerForm.value;
    console.log('Form Data:', formData);
    this.createDoctor(); 

  }

  createDoctor(){
      if(this.registerForm.value.password === this.registerForm.value.passwordConfirm){
        let newDoctor = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
      };
      this.loginService.createDoctor(newDoctor).subscribe({
        next: (newDoctorCreated) => {
            console.log("created doctor: "+ newDoctorCreated.email);         
            this.router.navigate(['/doctor-edit', newDoctorCreated.id]);
          },
          error: () => {
            console.log("An error creating the doctor")
          }
      })
      }  
      
  }

  ngOnInit() {
  }

}

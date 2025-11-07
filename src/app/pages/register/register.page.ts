import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class RegisterPage implements OnInit {
  private router = inject(Router);
  private loginService = inject(LoginService);

  roles:{displayName:string, value:string}[] = [{displayName:'Patient', value:'patient'},{displayName:"Doctor", value:'doctor'}];

  constructor() { }

  ngOnInit() {

    
  }

  onSubmit() {
    const formData = this.registerForm.value;
    console.log('Form Data:', formData);
    this.createNewUser(); 

  }

   registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)]),
    role: new FormControl('', [Validators.required])
  });

  createNewUser(){
    if(this.registerForm.value.password === this.registerForm.value.passwordConfirm){
        let newUser = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        role: this.registerForm.value.role!
      };
      this.loginService.createUser(newUser).subscribe({
        next: (newUserCreated) => {
            console.log("created user: "+ newUserCreated.email);    
            console.log("created user with role: "+ newUserCreated.role);
            if(newUserCreated.role == 'patient'){
              this.router.navigate(['/patient-edit', newUserCreated.id]);
            }   
            if(newUserCreated.role == 'doctor'){
              this.router.navigate(['/doctor-edit', newUserCreated.id]);
            }
          },
          error: () => {
            console.log("An error creating the patient")
          }
      })

      }
  }
  // registerPatient(){
  //   this.router.navigate(['/register-patient'])
  // }

  // registerDoctor(){
  //   this.router.navigate(['/register-doctor'])
  // }
}

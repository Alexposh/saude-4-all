import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonButton, IonCard } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.page.html',
  styleUrls: ['./register-doctor.page.scss'],
  imports: [IonicModule, HeaderComponent, ReactiveFormsModule],
})
export class RegisterDoctorPage implements OnInit {
  private doctorService = inject(DoctorService);
  
  constructor() { }

   registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    specialization: new FormControl(''),
    dateOfBirth: new FormControl(''),
    iban: new FormControl('')
  });

  onSubmit() {
    const formData = this.registerForm.value;
    console.log('Form Data:', formData);
    this.createDoctor(); 

  }

  createDoctor(){
    let newDoctor = {
            name: this.registerForm.value.name!,
            email: this.registerForm.value.email!,
            department: this.registerForm.value.department!,
            specialization: this.registerForm.value.specialization!,
            dateOfBirth: this.registerForm.value.dateOfBirth!
          };

          console.log(newDoctor);

          this.doctorService.createDoctor(newDoctor).subscribe({
        next: () => {
            console.log("created doctor: "+ newDoctor.name);          
    
          },
          error: () => {
            console.log("An error creating the doctor")
          }
      }  
      )
  }

  ngOnInit() {
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.page.html',
  styleUrls: ['./appointment-edit.page.scss'],
  imports: [IonicModule, HeaderComponent],
})
export class AppointmentEditPage implements OnInit {

  private doctorSevice = inject(DoctorService);

  constructor() { }

  ngAfterInit() {
    this.getAllDoctors();
  }

  ngOnInit(): void {
      this.getAllDoctors();
  }
  

  allDoctors:Doctor[] = [];  

  getAllDoctors(){    
    this.doctorSevice.getAllDoctors().subscribe({
      next: (doctors) =>{
        this.allDoctors = doctors;
      },
      error: (error) => {
        console.log("An error was found retrieving doctors: " + error);
      }  
    });
  }

  // createDoctor(doctor: Doctor){
  //   this.doctorSevice.createDoctor(doctor).subscribe({
  //     next: (response) => console.log("Doctor created:", response),
  //     error: (err)=> console.log("Error creating doctor:", err)
  //   });
  // }



}

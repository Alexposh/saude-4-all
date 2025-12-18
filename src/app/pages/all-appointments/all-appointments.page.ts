import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.page.html',
  styleUrls: ['./all-appointments.page.scss'],
  imports: [IonicModule, HeaderComponent],
})
export class AllAppointmentsPage implements OnInit {

   private appointmentService = inject(AppointmentService);
  appointments:Appointment[] = [];

  constructor() { }


  ngOnInit() {
      this.getAllAppointments();      
  }

  getAllAppointments(){
    this.appointmentService.getAllAppointments().subscribe({
      next: (appointments) =>{
        this.appointments = appointments;
      },
      error: (error) =>{
        console.log("Could not get the appointments "+ error)
      }

    });
  }

}

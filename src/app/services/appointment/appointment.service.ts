import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentDto } from 'src/app/models/appointmentDto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>("whatever");
  }

  getAppointmentsForDoctor(){

  }

  getAppointmentsForPatient(patientId:string){
    return this.httpClient.get<Appointment[]>(`http://localhost:8080/api/v1/appointments/appointment/patient/${patientId}`,
    )
  }

  createAppointment( newAppointment:AppointmentDto):Observable<AppointmentDto>{
    return this.httpClient.post<AppointmentDto>(
      'http://localhost:8080/api/v1/appointments/create',
      newAppointment
    )
  }

  updateAppointment(){

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  

  constructor(private httpClient:HttpClient) { 

  }

  getAllDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>("http://localhost:8080/api/v1/doctors").pipe(
      map((response:Doctor[] )=>{
        response.forEach(r=>console.log("a doctor named "+ r.name));
        return response;
      })
    );
  }

  // getDoctorById(id:string){
  //   return this.httpClient.get<Doctor>(`http://localhost:8080/api/v1/doctors/doctor/${id}`).pipe(
  //       map((response:Doctor)=>{
  //         return response;
  //     })
  //   );    
  // }

  getDoctorById(id: string): Observable<Doctor> {
  return this.httpClient.get<Doctor>(`http://localhost:8080/api/v1/doctors/doctor/${id}`);
  }

  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(
      'http://localhost:8080/api/v1/doctors/doctor',
      doctor
    );
  }

  updateDoctor(doctor: Doctor): Observable<Doctor>{
    return this.httpClient.patch<Doctor>('http://localhost:8080/api/v1/doctors/doctor',
      doctor)
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);

  standardUrl:string = 'http://localhost:8080/api/v1';

  constructor() { }
  createPatient(profileCreationData:{email:string, password:string}){
      return this.httpClient.post<User>(`${this.standardUrl}/user/create`, 
        profileCreationData)      
  }

  searchPatient(loginData:{email:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/user/login`, loginData);
  }


  createDoctor(profileCreationData:{email:string, password:string}):Observable<Doctor>{
      return this.httpClient.post<Doctor>(`${this.standardUrl}/staff/create-doctor`, 
        profileCreationData)      
  }
  
  searchDoctor(loginData:{email:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/login-doctor`, loginData);
  }


}

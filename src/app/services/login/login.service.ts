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
      return this.httpClient.post<User>(`${this.standardUrl}/user/create-patient`, 
        profileCreationData)      
  }

  createDoctor(profileCreationData:{email:string, password:string}){
      return this.httpClient.post<User>(`${this.standardUrl}/user/create-doctor`, 
        profileCreationData)      
  }

  createUser(accountCreationData:{email:string, password:string, role: string}){
    return this.httpClient.post<User>(`${this.standardUrl}/user/create-user`, 
        accountCreationData)      
  }


  searchUser(loginData:{email:string, password:string}){
    return this.httpClient.post<User>(
      `${this.standardUrl}/user/login`, loginData);
  }

   searchPatient(loginData:{email:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/user/login`, loginData);
  }
  
  searchDoctor(loginData:{email:string, password:string}):Observable<Doctor>{
    return this.httpClient.post<Doctor>(
      `${this.standardUrl}/user/login-doctor`, loginData);
  }


}

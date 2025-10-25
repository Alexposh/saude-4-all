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

  // searchUser(loginData:{email:string, password:string}, userType:string):Observable<User>{
  //   return this.httpClient.post<User>(`${this.standardUrl}/users/login`, 
  //     loginData)
  // }

  // createUser(profileCreationData:{email:string, password:string, role:string}){
  //     return this.httpClient.post<User>(`${this.standardUrl}/users/create`, 
  //       profileCreationData)
      
  // }


  createPatient(profileCreationData:{email:string, password:string}){
      return this.httpClient.post<Patient>(`${this.standardUrl}/patients/create`, 
        profileCreationData)      
  }

  searchPatient(loginData:{email:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/login-patient`, loginData);
  }


   createDoctor(profileCreationData:{email:string, password:string}){
      return this.httpClient.post<Doctor>(`${this.standardUrl}/doctors/create`, 
        profileCreationData)      
  }
  
  searchDoctor(loginData:{email:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/login-doctor`, loginData);
  }


}

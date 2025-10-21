import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);

  standardUrl:string = 'http://localhost:8080/api/v1';

  constructor() { }

  searchPatient(loginData:{username:string, password:string}):Observable<Patient>{
    return this.httpClient.post<Patient>(
      `${this.standardUrl}/login-patient`, loginData);
  }


}

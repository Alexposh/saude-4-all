import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gender } from 'src/app/models/gender';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}

  standardImageUrl: string = 'https://awkward-turquoise-hawk.myfilebase.com/ipfs/';
  standardApi:string = 'http://localhost:8080/api/v1';

  getAllPatients(): Observable<Patient[]> {
    return this.httpClient
      .get<Patient[]>(`${this.standardApi}/patients`)
  }

  getPatientById(id:string) :Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.standardApi}/patients/patient/${id}`);
  }

  getAllGenders():Observable<Gender[]>{
    return this.httpClient.get<Gender[]>(`${this.standardApi}/patients/genders`);
  }

  createPatient(newPatient:{}){
    return this.httpClient.post<{}>(
      `${this.standardApi}/patients/patient`, newPatient
    );    
  }

  updatePatient(updatedPatient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(
      `${this.standardApi}/patients/patient-update`, updatedPatient
    ); 
    // return updatedPatient;
  }
}

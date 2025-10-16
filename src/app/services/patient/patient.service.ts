import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}

  standardImageUrl: string = 'https://awkward-turquoise-hawk.myfilebase.com/ipfs/';

  getAllPatients(): Observable<Patient[]> {
    return this.httpClient
      .get<Patient[]>('http://localhost:8080/api/v1/patients')
      .pipe(
        map((response: Patient[]) => {
          response.forEach((r) => console.log('a patient named ' + r.name));
          return response;
        })
      );
  }

  createPatient(newPatient:{}): Observable <{}> {
    return this.httpClient.post<{}>(
      'http://localhost:8080/api/v1/patients/patient', newPatient
    );
    
  }
}

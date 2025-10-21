import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Doctor } from '../../models/doctor';
import { KeyValueId } from '../../models/keyValueId';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private httpClient = inject(HttpClient);
  standardApi:string = 'http://localhost:8080/api/v1';
  constructor( private httpService: HttpService) { 
  }

  standardImageUrl: string = 'https://awkward-turquoise-hawk.myfilebase.com/ipfs/';

  getAllDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.standardApi}/doctors`);
    // .pipe(
    //   map((response:Doctor[] )=>{
    //     // response.forEach(r=>console.log("a doctor named "+ r.name));
    //     return response;
    //   })
    // );
  }

  getAllSpecialities(){
    return this.httpClient.get<string[]>(`${this.standardApi}/doctors/specialities`);
  }

  getDoctorById(id: string): Observable<Doctor> {
  return this.httpClient.get<Doctor>(`${this.standardApi}/doctors/doctor/${id}`);
  }

  createDoctor(newDoctor:{}): Observable<{}> {
    return this.httpClient.post<{}>(
      `${this.standardApi}/doctor`,
      newDoctor
    );
  }

  updateOneField(dto:KeyValueId): Observable<KeyValueId>{
    console.log(dto);
   
    let headers = this.httpService.generateHttpJsonHeaders();
    return this.httpClient.post<KeyValueId>(`${this.standardApi}/doctors/doctor-update-field`,
      dto, {headers});
  }

  updateDoctor(doctor: Doctor): Observable<Doctor>{
    return this.httpClient.patch<Doctor>(`${this.standardApi}/doctors/doctor`,
      doctor)
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';
import { Gender } from 'src/app/models/gender';
import { Specialization } from 'src/app/models/specialization';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  httpClient = inject(HttpClient)
  constructor() { }

  standardApi:string = 'http://localhost:8080/api/v1';

  getAllGenders():Observable<Gender[]>{
    return this.httpClient.get<Gender[]>(`${this.standardApi}/shared/genders`);
  }

  getAllSpecializations():Observable<Specialization[]>{
    return this.httpClient.get<Specialization[]>(`${this.standardApi}/shared/specializations`);
  }

  getAllLocations():Observable<Location[]>{
    return this.httpClient.get<Location[]>(`${this.standardApi}/locations`);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private httpClient = inject(HttpClient);
  
  constructor() { }

  getAllLocations():Observable<Location[]>{
    return this.httpClient.get<Location[]>("http://localhost:8080/api/v1/locations");
  }

}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
    generateHttpJsonHeaders(){
        return new HttpHeaders({'Content-Type': 'application/json'});
    }
}
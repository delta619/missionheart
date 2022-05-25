import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }



  addDonation(payload:any){
    return this.http.post(environment.missionheart_api+ "/donate", payload)
  }

  addDPatient(payload:any){
    return this.http.post(environment.missionheart_api+ "/patient", payload)
    
  }

  addReach(payload:any){
    return this.http.post(environment.missionheart_api+ "/reach", payload)
    
  }

}

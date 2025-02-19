import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  addPersonalDetails(data:any){
    return this.http.post('http://localhost:3000/personal' , data)
  }

  addPropertyDetails(data:any){
    return this.http.post('http://localhost:3000/property' , data)
  }

  addAmountDetails(data:any){
    return this.http.post('http://localhost:3000/amount' , data)
  }

  getPersonalDetails(){
    return this.http.get('http://localhost:3000/personal')
  }

}

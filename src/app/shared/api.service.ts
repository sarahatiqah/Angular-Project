import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
    return this.http.post<any>("http://localhost:3000/signupUsers", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postApplication(data : any){
    return this.http.post<any>("http://localhost:3000/usersApplication", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getApplication(){
    return this.http.get<any>("http://localhost:3000/usersApplication")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateApplication(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/usersApplication/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  deleteApplication(id : number){
    return this.http.delete<any>("http://localhost:3000/usersApplication/" + id)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postJob(data : any){
    return this.http.post<any>("http://localhost:3000/jobList", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getJob(){
    return this.http.get<any>("http://localhost:3000/jobList")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateJob(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/jobList/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  deleteJob(id : number){
    return this.http.delete<any>("http://localhost:3000/jobList/" + id)
    .pipe(map((res:any) => {
      return res;
    }))
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobappliedService {


  public jobAppliedList : any = []
  public jobList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getJob(){
    return this.jobList.asObservable();
  }

  setJob(job: any){
    this.jobAppliedList.push(...job);
    this.jobList.next(job);
  }

  addtoJobApplied(job: any){
    this.jobAppliedList.push(job);
    this.jobList.next(this.jobAppliedList);
  }

  removeAppliedJob(job: any){
    this.jobAppliedList.map((a:any, index:any)=>{
      if(job.id=== a.id){
        this.jobAppliedList.splice(index,1);
      }
    })
    this.jobList.next(this.jobAppliedList);
  }

  removeAllAppliedJob(){
    this.jobAppliedList = []
    this.jobList.next(this.jobAppliedList);
  }
}

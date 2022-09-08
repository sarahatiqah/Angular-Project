import { Component, OnInit } from '@angular/core';
import { JobappliedService } from '../../shared/jobapplied.service';

@Component({
  selector: 'app-jobapplied',
  templateUrl: './jobapplied.component.html',
  styleUrls: ['./jobapplied.component.css']
})
export class JobappliedComponent implements OnInit {

  public job: any = [];
  
  constructor(private jobapplied : JobappliedService) { }

  ngOnInit(): void {
    this.jobapplied.getJob()
    .subscribe(res=>{
      this.job = res;
    })
  }
  removeAppliedJob(row: any){
    this.jobapplied.removeAppliedJob(row);
  }

  emptyAppliedJob(){
    this.jobapplied.removeAllAppliedJob();
  }

}
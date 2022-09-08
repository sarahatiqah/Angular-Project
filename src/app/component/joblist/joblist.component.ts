import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { JobappliedService } from '../../shared/jobapplied.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  public jobList: any;
  public searchTerm : string = '';
  public filterJobType : any;
  searchKey:string = "";
  
  constructor(private api: ApiService, private jobapplied : JobappliedService) { }

  ngOnInit(): void {
    this.api.getJob()
    .subscribe(res=>{
      this.jobList = res;
      this.filterJobType = res;

    });
    this.jobapplied.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }

  addtoAppliedList(row: any){
    this.jobapplied.addtoJobApplied(row);
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.jobapplied.search.next(this.searchTerm);
  }

  filter(jobType: string){
    this.filterJobType = this.jobList
    .filter((a:any)=>{
      if (a.jobType == jobType || jobType == ''){
        return a;
      }
    })
  }

}
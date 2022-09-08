import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagejoblistModel } from './managejoblist.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-managejoblist',
  templateUrl: './managejoblist.component.html',
  styleUrls: ['./managejoblist.component.css']
})
export class ManagejoblistComponent implements OnInit {

  formValue !: FormGroup;
  managejoblistModelObj : ManagejoblistModel = new ManagejoblistModel();
  jobData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      companyName: [''],
      jobRole: [''],
      skill: [''],
      jobType: ['']
    })
    this.getAllJob();
  }

  clickAddJob(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postJobDetails(){
    this.managejoblistModelObj.companyName = this.formValue.value.companyName;
    this.managejoblistModelObj.jobRole = this.formValue.value.jobRole;
    this.managejoblistModelObj.skill = this.formValue.value.skill;
    this.managejoblistModelObj.jobType = this.formValue.value.jobType;

    this.api.postJob(this.managejoblistModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Successfull")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllJob();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllJob(){
    this.api.getJob()
    .subscribe(res=>{
      this.jobData = res;
    })
  }

  deleteJob(row:any){
    this.api.deleteJob(row.id).subscribe(res=>{
      alert("Job deleted")
      this.getAllJob()
    })
  }

  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.managejoblistModelObj.id = row.id;
    this.formValue.controls['companyName'].setValue(row.companyName);
    this.formValue.controls['jobRole'].setValue(row.jobRole);
    this.formValue.controls['skill'].setValue(row.skill);
    this.formValue.controls['jobType'].setValue(row.jobType);
  }

  updateJobDetails(){
    this.managejoblistModelObj.companyName = this.formValue.value.companyName;
    this.managejoblistModelObj.jobRole = this.formValue.value.jobRole;
    this.managejoblistModelObj.skill = this.formValue.value.skill;
    this.managejoblistModelObj.jobType = this.formValue.value.jobType;
    

    this.api.updateJob(this.managejoblistModelObj, this.managejoblistModelObj.id).subscribe(res=>{
      alert("Job Updated")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllJob()
    })
  }
}

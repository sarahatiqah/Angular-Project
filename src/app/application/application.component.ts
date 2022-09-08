import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  submitted = false;

  applicationList:any;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
    this.applicationList=[];
  }

    applicationForm = this.fb.group({
      ivDate: ['', [Validators.required]],
      ivTime: ['', [Validators.required]]
    });
  

  ngOnInit(): void {
    this.getApplicationList()
  }

  get f() { return this.applicationForm.controls; }

  save() {
    this.submitted = true;
    this.http.post<any>("http://localhost:3000/usersApplication", this.applicationForm.value)
      .subscribe(res=>{
        alert("Successfull");
        this.router.navigate(['application']);
      },err=>{
        alert("Something went wrong")
      })
  }

  getApplicationList()
  {
    this.http.get('http://localhost:3000/usersApplication').subscribe((result:any)=>
    {
      this.applicationList=result;
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { first } from 'rxjs/operators';
import { ApiService } from '../shared/api.service';
import { TestModel } from './test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formValue!: FormGroup;
  testModelObj : TestModel = new TestModel;
  applicationData!: any;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private api: ApiService) { 
  }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
    nric: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12), Validators.pattern('^[0-9]*$')]],
    gender: ['',[Validators.required]],
    birthdate: ['', Validators.required],
    age: ['', [Validators.required, Validators.minLength(1),
    Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    contactType: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.minLength(10),
    Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    skills: this.fb.array([]),
    
    resume: ['',[Validators.required]],
      ivDate: ['', [Validators.required]],
      ivTime: ['', [Validators.required]]
    })
    this.getAllApplication()
  }

  postApplicationDetails(){
    
    this.testModelObj.ivDate = this.formValue.value.ivDate;
    this.testModelObj.ivTime = this.formValue.value.ivTime;

    this.api.postApplication(this.testModelObj).subscribe(res=>{
      console.log(res);
      alert("Successfull")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllApplication()
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllApplication(){
    this.api.getApplication().subscribe(res=>{
      this.applicationData = res;
    })
  }

  deleteApplication(application:any){
    this.api.deleteApplication(application.id).subscribe(res=>{
      alert("Application deleted")
      this.getAllApplication()
    })
  }

  onEdit(application:any){
    this.testModelObj.id = application.id;
    this.formValue.controls['firstName'].setValue(application.firstName);
    this.formValue.controls['lastName'].setValue(application.lastName);
    this.formValue.controls['nric'].setValue(application.nric);
    this.formValue.controls['gender'].setValue(application.gender);
    this.formValue.controls['birthdate'].setValue(application.birthdate);
    this.formValue.controls['age'].setValue(application.age);
    this.formValue.controls['email'].setValue(application.email);
    this.formValue.controls['phone'].setValue(application.phone);
    this.formValue.controls['resume'].setValue(application.resume);
    this.formValue.controls['programLanguage'].setValue(application.programLanguage);
    this.formValue.controls['experience'].setValue(application.experience);
    this.formValue.controls['ivDate'].setValue(application.ivDate);
    this.formValue.controls['ivTime'].setValue(application.ivTime);
  }

  updateApplicationDetails(){
    this.testModelObj.firstName = this.formValue.value.firstName;
    this.testModelObj.lastName = this.formValue.value.lastName;
    this.testModelObj.nric = this.formValue.value.nric;
    this.testModelObj.gender = this.formValue.value.gender;
    this.testModelObj.birthdate = this.formValue.value.birthdate;
    this.testModelObj.age = this.formValue.value.age;
    this.testModelObj.email = this.formValue.value.email;
    this.testModelObj.phone = this.formValue.value.phone;
    this.testModelObj.resume = this.formValue.value.resume;
    this.testModelObj.programLanguage = this.formValue.value.programLanguage;
    this.testModelObj.experience = this.formValue.value.experience;
    this.testModelObj.ivDate = this.formValue.value.ivDate;
    this.testModelObj.ivTime = this.formValue.value.ivTime;

    this.api.updateApplication(this.testModelObj, this.testModelObj.id).subscribe(res=>{
      alert("Application Updated")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllApplication()
    })
  }
}


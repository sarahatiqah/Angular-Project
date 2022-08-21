import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    submitted = false;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

    signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  
    preview: string = '';
  
    ngOnInit(): void {
    }
  
    get f() { return this.signupForm.controls; }
  
    save() {
      this.submitted = true;
      this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
      .subscribe(res=>{
        alert("Signup Successfully");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong")
      })
    }
  }

  
  
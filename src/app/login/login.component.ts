import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

    submitted = false;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

    loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  
    preview: string = '';
  
    ngOnInit(): void {
    }
  
    get f() { return this.loginForm.controls; }
  
    save() {
      this.submitted = true;
      this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
        if (user){
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['home'])
        }else{
          alert("User not found!");
        }
      },err=>{
        alert("Something went wrong!")
      })
    }
  }

  
  
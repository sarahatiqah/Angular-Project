import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    submitted = false;

    constructor(private fb: FormBuilder) { }

    loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z ]*$')]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    });
  
    preview: string = '';
  
    ngOnInit(): void {
    }
  
    get f() { return this.loginForm.controls; }
  
    save() {
      this.submitted = true;
      this.preview = JSON.stringify(this.loginForm.value);
    }

    get username(){
      return this.loginForm.get('username');
    }
  
    get password(){
      return this.loginForm.get("password");
    }
  }
  
  export class AppComponent { 

  }
  
  
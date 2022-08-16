import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loading = false;
    submitted = false;

    constructor(private fb: FormBuilder) { }

    signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  
    preview: string = '';
  
    ngOnInit(): void {
    }
  
    get f() { return this.signupForm.controls; }
  
    save() {
      this.submitted = true;
      this.preview = JSON.stringify(this.signupForm.value);
    }

    get username(){
      return this.signupForm.get('username');
    }
  
    get password(){
      return this.signupForm.get("password");
    }
  }
  
  export class AppComponent { 

  }
  
  
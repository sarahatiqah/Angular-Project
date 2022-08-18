import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

    submitted = false;

    constructor(private fb: FormBuilder, private router: Router) { }

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
      this.preview = JSON.stringify(this.loginForm.value);

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
      //True if all the fields are filled
      if(this.submitted)
      {
        this.router.navigate(['home']);
      }
    }
  }

  
  
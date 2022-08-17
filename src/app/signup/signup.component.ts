import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    submitted = false;

    constructor(private fb: FormBuilder, private router: Router) { }

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
      this.preview = JSON.stringify(this.signupForm.value);

        // stop here if form is invalid
        if (this.signupForm.invalid) {
          return;
        }

        //True if all the fields are filled
        if(this.submitted)
        {
          this.router.navigate(['login']);
        }
    }
  }

  
  
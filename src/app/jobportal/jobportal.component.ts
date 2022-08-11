import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})

export class JobportalComponent implements OnInit {
  dateTime!: Date;
  submitted = false;


  constructor(private fb: FormBuilder) { }

  jobForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]],
    nric: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12), Validators.pattern('^[0-9]*$')]],
    gender: ['',[Validators.required]],
    birthdate: ['', Validators.required],
    age: ['', [Validators.required, Validators.minLength(3),
    Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    contactType: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.minLength(10),
    Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    skills: this.fb.array([]),
  });

  preview: string = '';

  ngOnInit(): void {
      
      timer(0,1000).subscribe(() => {
        this.dateTime = new Date()
      })
  }

  get f() { return this.jobForm.controls; }

  save() {
    this.submitted = true;
    this.preview = JSON.stringify(this.jobForm.value);
  }

  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }

  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        programLanguage: [''],
        experience: [0, [Validators.pattern('^[0-9]*$')]],
        rating: [''],
      })
    );
  }
 
  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

  get firstName(){
    return this.jobForm.get('firstName');
  }

  get contactType(){
    return this.jobForm.get("contactType");
  }

  get email(){
    return this.jobForm.get('email');
  }

  getProgramingLagnuage(index: number) {
    return this.skillsForms.at(index).get('programLanguage');
  }

  getExperience(index: number) {
    return this.skillsForms.at(index).get('experience');
  }

  getRating(index: number) {
    return this.skillsForms.at(index).get('rating');
  }
}

export class AppComponent { 
    
  val1: number = 2;
}


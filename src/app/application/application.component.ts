import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  applicationList:any;
  constructor(private router: Router, private httpClient: HttpClient) { 
    this.applicationList=[];
  }

  ngOnInit(): void {
    this.getApplicationList()
  }

  getApplicationList()
  {
    this.httpClient.get('http://localhost:3000/usersApplication').subscribe((result:any)=>
    {
      this.applicationList=result;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { JobappliedService } from 'src/app/shared/jobapplied.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private jobapplied : JobappliedService) { }

  ngOnInit(): void {
    this.jobapplied.getJob()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
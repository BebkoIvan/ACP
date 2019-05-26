import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.pug',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   tagsList:string[]=[
     "JavaScript","NodeJs","OOP","Angular","React","Vue","C++","Java","REST API","Pascal","Scala"
   ];


}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.pug',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {

  constructor() { }

 @Input() date:string;
 
 dateFormatted:Date;
 year:string;
 month:string;
 dt:string;
  
 ngOnInit() {
  
  this.dateFormatted=new Date(this.date);
  this.year =`${this.dateFormatted.getFullYear()}`;
  this.month = `${this.dateFormatted.getMonth()+1}`;
  this.dt = `${this.dateFormatted.getDate()}`;

  if (parseInt(this.dt) < 10) {
    this.dt ='0'+this.dt;
  }
  if (parseInt(this.month) < 10) {
    this.month='0'+this.month ;
  }
  }



}

import { Component, OnInit,Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-user-pic',
  templateUrl: './user-pic.component.pug',
  styleUrls: ['./user-pic.component.scss']
})
export class UserPicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:string;
  @Input() lastname:string;
  @Input() imgSrc:string;   

  initials():string{return this.name.charAt(0)+this.lastname.charAt(0) }
  
}

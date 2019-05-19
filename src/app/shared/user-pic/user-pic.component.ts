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

  @Input() profile:User;   

  initials():string{return this.profile.name.charAt(0)+this.profile.lastname.charAt(0) }
  
}

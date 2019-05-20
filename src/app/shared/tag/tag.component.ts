import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.pug',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor() { }

  @Input() tagActive:boolean;
  @Input() tagTitle:string;

  // @Output() tagClicked = new EventEmitter();
  changeState(e:Event):void{
    this.tagActive=!this.tagActive;
  }
  ngOnInit() {
  }

}

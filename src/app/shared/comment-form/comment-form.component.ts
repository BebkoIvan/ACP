import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createComment(event:Event,title:string):void{
    event.preventDefault();
    let comment=title;
  }
}

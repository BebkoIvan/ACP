import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  CommentForm: FormGroup=new FormGroup({
    name: new FormControl('',[
      Validators.minLength(2),
      Validators.maxLength(23),
      Validators.required
    ]),
    comment: new FormControl('',[
    Validators.minLength(10),
      Validators.maxLength(999),
      Validators.required
    ]),
  });
  
   

  createComment(event:Event,title:string):void{
    event.preventDefault();
    let comment=title;
  }
}

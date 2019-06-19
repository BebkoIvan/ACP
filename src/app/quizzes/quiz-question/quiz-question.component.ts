import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.pug',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.pug',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  acaActive = true;
  quiz:any;
  constructor(private _quizS:QuizzesService,private route: ActivatedRoute) { }
  

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.quiz = this._quizS.getOneQuiz(id);
  }

  formSubmitted(value) {
  }

}

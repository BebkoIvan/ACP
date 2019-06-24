import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.pug',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  acaActive = true;
  quiz: any;
  quiz1$: Observable<any>;
  constructor(private _quizS:QuizzesService,private route: ActivatedRoute) { }
  

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.quiz1$ = this._quizS.getOneQuiz(id);
    this.quiz1$.subscribe(data => this.quiz = data[0]);
  }

  formSubmitted(value) {
    console.log(value);
  }

}

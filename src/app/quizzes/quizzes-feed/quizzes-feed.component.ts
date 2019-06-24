import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quizzes-feed',
  templateUrl: './quizzes-feed.component.pug',
  styleUrls: ['./quizzes-feed.component.scss']
})
export class QuizzesFeedComponent implements OnInit {
  acaActive = true;
  quizzes1: Observable<any>;
  quizzes = [];
  constructor(public quizS : QuizzesService,private router: Router) { }

  ngOnInit() {
    this.quizzes1 = this.quizS.getQuizzes();
    this.quizzes1.subscribe(data => {this.quizzes = data.quizzes;    console.log(this.quizzes);});
    
  }

  acaHandler(): void {
    this.acaActive = !this.acaActive;
    console.log(this.quizS.allQuizzes);
}

  deleteQuiz(quiz:any) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
  }
}

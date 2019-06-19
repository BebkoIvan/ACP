import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes-feed',
  templateUrl: './quizzes-feed.component.pug',
  styleUrls: ['./quizzes-feed.component.scss']
})
export class QuizzesFeedComponent implements OnInit {
  acaActive = true;

  quizzes = [];
  constructor(private quizS : QuizzesService,private router: Router) { }

  ngOnInit() {
    this.quizzes = this.quizS.allQuizzes;
  }

  acaHandler(): void {
    this.acaActive = !this.acaActive;
}

  deleteQuiz(quiz:any) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.pug',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  
  @Input() quiz;
  author$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.author$ = this.authService.getUserById(this.quiz.author).pipe(
      map((user) => user.username)
    );
  }

}

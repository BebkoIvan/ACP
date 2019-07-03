import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { QuizzesRequested } from 'src/app/quizzes/store/quizzes.actions';
import { selectQuizzes } from 'src/app/quizzes/store/quizzes.selectors';
import { QuizzesService } from 'src/app/quizzes/services/quizzes.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workshop-quizzes',
  templateUrl: './workshop-quizzes.component.pug',
  styleUrls: ['./workshop-quizzes.component.scss']
})
export class WorkshopQuizzesComponent implements OnInit {

  postId: string;
  quizzes$: Observable<any>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private quizzesService:QuizzesService) {
    this.postId = route.parent.snapshot.params.id;
   }

  ngOnInit() {
    const params = {
      postId: '5d16700caed59b49b6ef057b'
    };

    this.quizzes$ = this.quizzesService.getQuizzes(params).pipe(map((data) => data.quizzes));
    this.quizzes$.subscribe(console.log);
  }

}

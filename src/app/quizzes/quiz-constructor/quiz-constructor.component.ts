import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { QuizzesService } from '../services/quizzes.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { AddQuiz } from '../store/quizzes.actions';
import { Observable } from 'rxjs';
import { WorkshopsService } from 'src/app/workshops/services/workshops.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-quiz-constructor',
  templateUrl: './quiz-constructor.component.pug',
  styleUrls: ['./quiz-constructor.component.scss']
})
export class QuizConstructorComponent implements OnInit {

  form: FormGroup;
  questionTypes = ['input', 'select'];
  posts$: Observable<any>;
  constructor(private fb: FormBuilder, private _quizS: QuizzesService,private workshopsService: WorkshopsService,
               private store: Store<AppState>) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      posts: [null, Validators.required],
      questions: this.fb.array([])
    });

    this.posts$ = this.workshopsService.getWorkshops({}).pipe(map((data) => data.posts));
  }

  get questionsForms() {
    return this.form.get('questions') as FormArray;
  }

  correctAnswerValidator(questionType: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (questionType.value === 'select') {
        return { correctAnswer: true };
      }
      else {
        if (control.value !== undefined && (isNaN(control.value))) {
          return { 'ageRange': true };
      }
      else{
        return null;
      }
      }


    };
}

  addQuestion() {
    const question = this.fb.group({
      question: ['', Validators.required],
      questionType: [this.questionTypes[0], Validators.required],
      correctAnswer: [''],
      answerVariants: new FormArray([])
    })

    this.questionsForms.push(question);
  }

  addAnswer(i) {
    
    const question = this.questionsForms.at(i);
    (question.get('answerVariants') as FormArray).push(
            this.fb.group({
                answer: ['', Validators.required],
                isCorrect: [false]
            })
        );
  
  }

  deleteVariant(questionNumb: number, variant: number) {
    const question = this.questionsForms.at(questionNumb);
    (question.get('answerVariants') as FormArray).removeAt(variant);
  }

  deleteQuestion(i) {
    this.questionsForms.removeAt(i);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const newQuiz = {
      ...this.form.value
    };
    newQuiz.posts = [newQuiz.posts];
    this.store.dispatch(new AddQuiz({quiz: newQuiz}));
    this.form.reset();

}

}

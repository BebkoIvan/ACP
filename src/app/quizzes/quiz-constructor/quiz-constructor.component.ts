import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { QuizzesService } from '../services/quizzes.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { AddQuiz } from '../store/quizzes.actions';


@Component({
  selector: 'app-quiz-constructor',
  templateUrl: './quiz-constructor.component.pug',
  styleUrls: ['./quiz-constructor.component.scss']
})
export class QuizConstructorComponent implements OnInit {

  form: FormGroup;
  questionTypes = ['Short answer', 'Choice'];

  constructor(private fb: FormBuilder, private _quizS: QuizzesService, private store: Store<AppState>) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      questions: this.fb.array([])
    })
  }

  get questionsForms() {
    return this.form.get('questions') as FormArray;
  }



  addQuestion() {
    const question = this.fb.group({
      question: ['', Validators.required],
      questionType: this.questionTypes[0],
      correctAnswer: [],
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
    const newQuiz = {
      posts: ['5d16700caed59b49b6ef057b'],
      ...this.form.value
    };
    // this._quizS.createQuiz(newQuiz).subscribe(console.log);
    this.store.dispatch(new AddQuiz({quiz: newQuiz}));

}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-quiz-constructor',
  templateUrl: './quiz-constructor.component.pug',
  styleUrls: ['./quiz-constructor.component.scss']
})
export class QuizConstructorComponent implements OnInit {

  form: FormGroup;
  questionTypes = ['Short answer'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      quizName: '',
      questions: this.fb.array([])
    })
  }

  get questionsForms() {
    return this.form.get('questions') as FormArray;
  }


  addQuestion() {
    const question = this.fb.group({
      question: [],
      questionType: this.questionTypes[0],
      correctAnswer: []
    })

    this.questionsForms.push(question);
  }

  deleteQuestion(i) {
    this.questionsForms.removeAt(i);
  }

}

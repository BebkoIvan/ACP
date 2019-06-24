import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { ApiService } from 'src/app/shared/services/api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  allQuizzes = [
    {
      name: 'Final exam',
      author: 'Ivan Bebko',
      id: 0,
      date:'2019-06-12T18:33:00.447Z',
      questions: [
        {
        correctAnswer: 'Angular',
        question: 'What is the best JS framework',
        questionType: 'input'
      },
  
      {
        answerVariants: [
          {
            answer: 'Jira',
            isCorrect: false
          },
          {
            answer: 'GitLab',
            isCorrect: false
          },
  
          {
            answer: 'Z-Stream',
            isCorrect: true
          }
        ],
        question: 'What is the best CRM?',
        questionType: 'select'
      }
    ]
    },
    {
      name: 'Money quiz',
      id: 1,
      author: 'Ivan Bebko',
      date: '2019-06-12T18:33:00.447Z',
      questions: [
        {
        correctAnswer: 'Jeff Bezos',
        question: 'Who is the richest man on this planet?',
        questionType: 'input'
      },
  
      {
        answerVariants: [
          {
            answer: 'Amazon',
            isCorrect: false
          },
          {
            answer: 'Walmart',
            isCorrect: true
          },
  
          {
            answer: 'Apple',
            isCorrect: false
          }
        ],
        question: 'What is the largest company by revenue?',
        questionType: 'select'
      },

      {
        answerVariants: [
          {
            answer: 'Barac Obama',
            isCorrect: false
          },
          {
            answer: 'Bill Gates',
            isCorrect: false
          },
  
          {
            answer: 'Kylie Jenner',
            isCorrect: true
          }
        ],
        question: 'Who is the youngest billionaire?',
        questionType: 'select'
      }
    ]
    },

    ];
  
    constructor(private _userService: UserAuthService, private _api: ApiService) { }

    getAll(){
      return this.allQuizzes;
    }

    getOneQuiz(id:any){

      return this._api.getRequest(`quizzes/${id}`, null, {id: `${id}`});

      // return this.allQuizzes.find(x => x.id == id);
    }

    getQuizzes(): Observable<any> {
      return this._api.getRequest(`quizzes/all`);
    }
    
    addQuiz(quiz:any){
      quiz.id = this.allQuizzes.length;
      quiz.author =  'Ivan Bebko';
      quiz.date = '2019-06-12T18:33:00.447Z';
      this.allQuizzes.push(quiz);
    }

}

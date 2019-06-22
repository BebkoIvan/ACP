import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  allQuizzes = [
    {
      quizName: 'Final exam',
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
      quizName: 'Money quiz',
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
  
    constructor() { }

    getAll(){
      return this.allQuizzes;
    }

    getOneQuiz(id:any){
      return this.allQuizzes.find(x => x.id == id);
    }

    addQuiz(quiz:any){
      quiz.id = this.allQuizzes.length;
      quiz.author='Ivan Bebko';
      quiz.date = '2019-06-12T18:33:00.447Z';
      this.allQuizzes.push(quiz);
    }

}

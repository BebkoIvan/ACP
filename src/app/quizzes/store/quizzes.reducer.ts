import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { QuizzesActions, QuizzesActionTypes } from './quizzes.actions';


interface QuizzesFeedState extends EntityState<any> {}
// export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

interface QuizState {
  quiz: any | null ;
}

export interface QuizzesState {
  quiz: QuizState;
  quizzesFeed: QuizzesFeedState;
}

const adapterQuizzesFeed = createEntityAdapter<any>();

const QuizzesFeedInitialState: QuizzesFeedState = adapterQuizzesFeed.getInitialState({ });

const QuizInitialState: QuizState = {
  quiz: null
};

export const initialState: QuizzesState = {
quiz: QuizInitialState,
quizzesFeed: QuizzesFeedInitialState
}

export function quizzesReducer(state = initialState, action: QuizzesActions): QuizzesState {
  switch (action.type) {
    
    case QuizzesActionTypes.QuizzesLoaded:
    return  { ...state, quizzesFeed: adapterQuizzesFeed.addAll(action.payload.quizzes, state.quizzesFeed) };

    case QuizzesActionTypes.QuizLoaded:
    return { ...state, quiz: { quiz: action.payload.quiz } };

    case QuizzesActionTypes.QuizAdded:
    return { ...state, quizzesFeed: adapterQuizzesFeed.addOne(action.payload.quiz, state.quizzesFeed) };

    case QuizzesActionTypes.QuizDeleted:
    return { ...state, quizzesFeed: adapterQuizzesFeed.removeOne(action.payload.quizId, state.quizzesFeed) };


    default:
      return state;
  }
}

export const selectQuizzesFeedState = (state: QuizzesState) => state.quizzesFeed;

export const { selectAll: selectAllQuizzes } = adapterQuizzesFeed.getSelectors();
import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { WorkshopsActions, WorkshopsActionTypes } from './workshops.actions';

interface ArticlesState extends EntityState<Workshop> {

}

interface TagsState extends EntityState<any> {
}

export interface WorkshopsState {
  articles: ArticlesState;
  tags: TagsState;
}

const adapterTags = createEntityAdapter<Tag>(
  {
    // selectId: tag => tag.seq
    // I don't know why but it is not working,that is why I am using createdAt as a key. How can make this adapter take tag.seq as an selectId? 
}
);

const adapterArticles = createEntityAdapter<Workshop>({
  selectId: workshop => workshop.createdAt
});



const articlesInitialState: ArticlesState = adapterArticles.getInitialState({ });
const tagsInitialState: TagsState = adapterTags.getInitialState({});

const initialState = {
  articles: articlesInitialState,
  tags: tagsInitialState
}



export function workshopsReducer(state = initialState, action: WorkshopsActions): WorkshopsState {
  switch (action.type) {
    
    case WorkshopsActionTypes.ArticlesLoaded:
    return { ...state, articles: adapterArticles.addAll(action.payload.workshops, state.articles) };

    case WorkshopsActionTypes.TagsLoaded:
    return { ...state, tags: adapterArticles.addAll(action.payload.tags, state.tags) };

    default:
      return state;
  }
}

export const selectArticlesState = (state: WorkshopsState) => state.articles;
export const selectTagsState = (state: WorkshopsState) => state.tags;

export const { selectAll: selectAllArticles } = adapterArticles.getSelectors();
export const { selectAll: selectAllTags } = adapterTags.getSelectors();



import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { WorkshopsActions, WorkshopsActionTypes } from './workshops.actions';
import { Tags } from '../workshops-data/tags';

interface ArticlesState extends EntityState<Workshop> {
}

interface CommentsState extends EntityState<Comment1> {
}

interface WorkshopState {
  workshop: Workshop | null;
}

interface TagsState {
  tags: Tag[] | null;
}

// interface TagsState extends EntityState<any> {
// }

export interface WorkshopsState {
  articles: ArticlesState;
  tags: TagsState;
  workshopSelected: WorkshopState;
  comments: CommentsState;
}

// const adapterTags = createEntityAdapter<Tag>(
//   {
//     // selectId: tag => tag.seq
//     // I don't know why but it is not working,that is why I am using createdAt as a key. How can make this adapter take tag.seq as an selectId? 
// }
// );

const adapterArticles = createEntityAdapter<Workshop>();

const adapterComments = createEntityAdapter<Comment1>();



const articlesInitialState: ArticlesState = adapterArticles.getInitialState({ });
// const tagsInitialState: TagsState = adapterTags.getInitialState({});
const tagsInitialState: TagsState = {
  tags: null
}
const commentsInitialState: CommentsState = adapterComments.getInitialState({ });
const WorkshopInitialState: WorkshopState = {
  workshop: null
};


const initialState = {
  articles: articlesInitialState,
  tags: tagsInitialState,
  workshopSelected: WorkshopInitialState,
  comments: commentsInitialState

}



export function workshopsReducer(state = initialState, action: WorkshopsActions): WorkshopsState {
  switch (action.type) {
    
    case WorkshopsActionTypes.ArticlesLoaded:
    return { ...state, articles: adapterArticles.addAll(action.payload.workshops, state.articles) };

    case WorkshopsActionTypes.TagsLoaded:
    return { ...state, tags: { tags: action.payload.tags } };

    case WorkshopsActionTypes.WorkshopCommentsLoaded:
    return { ...state, comments: adapterComments.addAll(action.payload.comments, state.comments) };

    case WorkshopsActionTypes.WorkshopCommentAdded:
    return { ...state, comments: adapterComments.addOne(action.payload.comment, state.comments) };

    case WorkshopsActionTypes.WorkshopLoaded:
    return { ...state, workshopSelected: { workshop: action.payload.workshop } };

    default:
      return state;
  }
}

export const selectArticlesState = (state: WorkshopsState) => state.articles;
export const selectCommentsState = (state: WorkshopsState) => state.comments;
// export const selectTagsState = (state: WorkshopsState) => state.tags;

export const { selectAll: selectAllArticles } = adapterArticles.getSelectors();
export const { selectAll: selectAllComments } = adapterComments.getSelectors();
// export const { selectAll: selectAllTags } = adapterTags.getSelectors();



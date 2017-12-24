import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR,
  
  FETCH_CATEGORIES_DONE,
  FETCH_CATEGORIES_ERROR
} from './postTypes';

const initState = { error: false, fetched: false, posts: [], categories: [] };

export default (state = initState, action = {}) => {
  const reducerSwitch = {
    [FETCH_POSTS_START]  : { ...state, fetched: false, posts: [] },
    [FETCH_POSTS_DONE] : { ...state, fetched: true, posts: action.payload },
    [FETCH_POSTS_ERROR] : { ...state, error: true, posts: [] },
    
    [FETCH_CATEGORIES_DONE] : { ...state, fetched: true, categories: action.payload },
    [FETCH_CATEGORIES_ERROR] : { ...state, error: true, categories: [] }
  };
  return reducerSwitch[action.type] || state;
};

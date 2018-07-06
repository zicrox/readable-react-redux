import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR,
  FETCH_POST_BY_ID_DONE,
  FETCH_CATEGORIES_DONE,
  FETCH_POST_BY_CATEGORY_DONE,
} from './postTypes';

const initState = {
  postsError: false,
  postsFetched: false,
  postsByCategoryFetched: false,
  postDetailFetched: false,
  posts: [],
  categories: [],
  postsByCategory: [],
  postDetail: {}
};

export default (state = initState, action = {}) => {
  const reducerSwitch = {
    [FETCH_POSTS_START]  : { ...state, postsFetched: false, posts: [] },
    [FETCH_POSTS_DONE] : { ...state, postsFetched: true, posts: action.payload },
    [FETCH_POSTS_ERROR] : { ...state, postsError: true, posts: [] },
    
    [FETCH_CATEGORIES_DONE] : { ...state, categories: action.payload },
    
    [FETCH_POST_BY_CATEGORY_DONE] : { ...state, postsByCategoryFetched: true, postsByCategory: action.payload },
    
    [FETCH_POST_BY_ID_DONE] : { ...state, postDetailFetched: true, postDetail: action.payload }
  };
  return reducerSwitch[action.type] || state;
};

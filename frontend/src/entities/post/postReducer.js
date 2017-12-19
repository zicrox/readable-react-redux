import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR
} from './postTypes';

const initState = { error: false, fetched: false, posts: [] };

export default (state = initState, action = {}) => {
  const reducerSwitch = {
    [FETCH_POSTS_START]  : { ...state, fetched: false, posts: [] },
    [FETCH_POSTS_DONE] : { ...state, fetched: true, posts: action.payload },
    [FETCH_POSTS_ERROR] : { ...state, error: true, posts: [] }
  };
  return reducerSwitch[action.type] || state;
};

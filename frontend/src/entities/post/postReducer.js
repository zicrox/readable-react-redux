import { SET_POSTS, FETCH_POSTS, ERROR_POSTS } from './postTypes';

const initState = { error: false, fetched: false, posts: [] };

export default (state = initState, action = {}) => {
  const reducerSwitch = {
    [SET_POSTS]  : { ...state, fetched: true, posts: action.payload },
    [FETCH_POSTS]: { ...state, fetched: false, posts: [] },
    [ERROR_POSTS]: { ...state, error: true, posts: [] }
  };
  return reducerSwitch[action.type] || state;
};

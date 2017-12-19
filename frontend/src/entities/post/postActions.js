import { SET_POSTS, FETCH_POSTS, ERROR_POSTS } from './postTypes';
import apiCalls from '../../apiCalls';

// Redux actions object to export
const actions = {};

// Redux: basic action creator
actions.setPosts = payload => ({
  type: SET_POSTS,
  payload
});

// Redux: async action creator
actions.fetchPosts = () => ((dispatch) => {
  dispatch({type: FETCH_POSTS})
  apiCalls.getPosts()
    .then((posts) => {
      dispatch({type: SET_POSTS, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: ERROR_POSTS, payload: err})
    })
});

export default actions;

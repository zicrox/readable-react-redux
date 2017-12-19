import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR,
  ADD_POSTS_DONE,
  ADD_POSTS_ERROR
} from './postTypes';
import apiCalls from '../../apiCalls';

// Redux actions object to export
const actions = {};

// Async action: Fetch post from server 
actions.fetchPosts = () => ((dispatch) => {
  dispatch({type: FETCH_POSTS_START})
  apiCalls.getPosts()
    .then((posts) => {
      dispatch({type: FETCH_POSTS_DONE, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: FETCH_POSTS_ERROR, payload: err})
    })
});

// Async action: Add post 
actions.addPost = (post) => ((dispatch) => {
  apiCalls.addPost(post)
    .then((post) => {
      dispatch({type: ADD_POSTS_DONE, payload: post})
    })
    .catch((err) =>{
      dispatch({type: ADD_POSTS_ERROR, payload: err})
    })
});

export default actions;

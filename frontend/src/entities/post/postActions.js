import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR,
  FETCH_CATEGORIES_DONE,
  FETCH_CATEGORIES_ERROR,
  ADD_POSTS_DONE,
  ADD_POSTS_ERROR
} from './postTypes';
// Methods to use the api server
import apiCalls from '../../apiCalls';

// Redux actions object to export
const actions = {};

// Fetch post 
actions.fetchPosts = () => ((dispatch) => {
  dispatch({type: FETCH_POSTS_START})
  apiCalls.fetchPosts()
    .then((posts) => {
      dispatch({type: FETCH_POSTS_DONE, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: FETCH_POSTS_ERROR, payload: err})
    })
});

// Fetch categories
actions.fetchCategories = () => ((dispatch) => {
  apiCalls.fetchCategories()
    .then((posts) => {
      dispatch({type: FETCH_CATEGORIES_DONE, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: FETCH_CATEGORIES_ERROR, payload: err})
    })
});

// Add post
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

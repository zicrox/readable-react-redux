import {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE,
  FETCH_POSTS_ERROR,
  FETCH_POST_BY_ID_START,
  FETCH_POST_BY_ID_DONE,
  FETCH_POST_BY_ID_ERROR,
  FETCH_CATEGORIES_DONE,
  FETCH_CATEGORIES_ERROR,
  FETCH_POST_BY_CATEGORY_DONE,
  FETCH_POST_BY_CATEGORY_ERROR,
  ADD_POSTS_DONE,
  ADD_POSTS_ERROR,
  SET_SORT_METHOD,
  EDIT_POSTS_DONE,
  EDIT_POSTS_ERROR,
} from './postTypes';
// Methods to use the api server
import apiCalls from '../../apiCalls';

// Redux actions object to export
const actions = {};

// 
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

actions.fetchPostById = (id) => ((dispatch) => {
  dispatch({type: FETCH_POST_BY_ID_START})
  apiCalls.fetchPostById(id)
    .then((post) => {
      dispatch({type: FETCH_POST_BY_ID_DONE, payload: post})
    })
    .catch((err) =>{
      dispatch({type: FETCH_POST_BY_ID_ERROR, payload: err})
    })
});

actions.fetchCategories = () => ((dispatch) => {
  apiCalls.fetchCategories()
    .then((posts) => {
      dispatch({type: FETCH_CATEGORIES_DONE, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: FETCH_CATEGORIES_ERROR, payload: err})
    })
});

actions.fetchPostsByCategory = (category) => ((dispatch) => {
  apiCalls.fetchPostsByCategory(category)
    .then((posts) => {
      dispatch({type: FETCH_POST_BY_CATEGORY_DONE, payload: posts})
    })
    .catch((err) =>{
      dispatch({type: FETCH_POST_BY_CATEGORY_ERROR, payload: err})
    })
});

actions.addPost = (post) => ((dispatch) => {
  apiCalls.addPost(post)
    .then((post) => {
      dispatch({type: ADD_POSTS_DONE, payload: post})
    })
    .catch((err) =>{
      dispatch({type: ADD_POSTS_ERROR, payload: err})
    })
});

actions.editPost = (post) => ((dispatch) => {
  apiCalls.editPost(post)
    .then((post) => {
      dispatch({type: EDIT_POSTS_DONE, payload: post})
    })
    .catch((err) =>{
      dispatch({type: EDIT_POSTS_ERROR, payload: err})
    })
});

// Sync actions creators
actions.setSortMethod = (sortMethod) => ({type: SET_SORT_METHOD, payload: sortMethod});

export default actions;

// ** With Async await (I prefer "then catch")
// actions.fetchPosts = () => (async (dispatch) => {
//   dispatch({type: FETCH_POSTS_START})
//   try {
//     const posts = await apiCalls.fetchPosts();
//     dispatch({type: FETCH_POSTS_DONE, payload: posts});
//   } catch (err) {
//     dispatch({type: FETCH_POSTS_ERROR, payload: err})
//   }
// });

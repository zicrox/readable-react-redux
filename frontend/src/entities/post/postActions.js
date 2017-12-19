import { SET_POSTS } from './postTypes';

// Redux actions object to export
const actions = {};

// Redux: basic action creator
actions.setPosts = payload => ({
  type: SET_POSTS,
  payload
});

export default actions;

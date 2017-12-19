import { SET_POSTS } from './postTypes';

const initState = [];

export default (state = initState, action = {}) => {
  const reducerSwitch = {
    [SET_POSTS]: action.payload,
  };
  return reducerSwitch[action.type] || state;
};

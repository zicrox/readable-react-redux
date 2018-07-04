import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { postReducer } from './entities/post';


// Redux: combine multiple reducers
// The shape of the state object matches the keys of the passed reducers
const reducers = combineReducers({
  post: postReducer
});
// Redux: middleware
// Useful redux-logger options: {diff: true} (show state diff)
const middleware = applyMiddleware(thunk, createLogger({diff: false}));
// Redux: create our store
const store = createStore(reducers, middleware);

export default store;
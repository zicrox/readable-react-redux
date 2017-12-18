import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { postReducer } from './entities/post';
console.log(postReducer);

// Redux: combine multiple reducers
// The shape of the state object matches the keys of the passed reducers
const reducers = combineReducers({
  post: postReducer
});
// Redux: middleware
const middleware = applyMiddleware(createLogger());
// Redux: create our store
const store = createStore(reducers, middleware);

export default store;
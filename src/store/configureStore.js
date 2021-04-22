import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer =  (state=[], action) => {
  return state;
}

export default () => {
  const store = createStore(
    combineReducers({reducer}), 
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

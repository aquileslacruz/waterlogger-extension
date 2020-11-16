import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import app from './app';

const reducer = combineReducers({
    app
});

const store = createStore(
    reducer,
    (applyMiddleware(createLogger(), thunkMiddleware))
);

export default store;

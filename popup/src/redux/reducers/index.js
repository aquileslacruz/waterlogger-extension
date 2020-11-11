import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import app from './app';
import login from './login';
import search from './search';
import notifications from './notifications';

const reducer = combineReducers({
    app,
    login,
    search,
    notifications,
});

const store = createStore(
    reducer,
    (applyMiddleware(createLogger(), thunkMiddleware))
);

export default store;
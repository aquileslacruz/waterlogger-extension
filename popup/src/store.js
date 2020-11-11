import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import app from './app/reducer';
import login from './login/reducer';
import search from './search/reducer';
import notifications from './notifications/reducer';

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

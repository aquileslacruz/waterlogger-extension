import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import app from './app/reducer';
import login from './login/reducer';
import home from './home/reducer';

const reducer = combineReducers({
    app,
    login,
    home,
});

const store = createStore(
    reducer,
    (applyMiddleware(createLogger(), thunkMiddleware))
);

export default store;

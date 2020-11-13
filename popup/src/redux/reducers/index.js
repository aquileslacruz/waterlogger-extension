import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import app from "./app";
import home from "./home";
import search from "./search";
import following from "./following";
import notifications from "./notifications";

const reducer = combineReducers({
	app,
	home,
	search,
	following,
	notifications,
});

const store = createStore(
	reducer,
	applyMiddleware(createLogger(), thunkMiddleware)
);

export default store;

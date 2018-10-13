import { applyMiddleware, createStore } from 'redux';
import reducers from '../../controller/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const middlewares = [thunk];
middlewares.push(createLogger());
middlewares.push(myRouterMiddleware);
const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;

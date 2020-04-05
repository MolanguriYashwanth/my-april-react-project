import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, compose,applyMiddleware } from "redux";
import { Provider} from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import RoomsReducer from "./store/reducers/rooms";
import {watchAddRoom} from './store/sagas/addSaga';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk,sagaMiddleware),
  // other store enhancers if any
);
const reducer = combineReducers({
  house:RoomsReducer
});

const store = createStore(
  reducer,
  enhancer
);

sagaMiddleware.run(watchAddRoom)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

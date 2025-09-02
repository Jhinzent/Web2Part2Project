import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { applyMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './reducer/RootReducer';
import userReducer from './reducer/UserReducer';
import degreeCourseReducer from './reducer/DegreeCourseReducer'
import degreeCourseApplicationsReducer from './reducer/DegreeCourseApplicationReducer';
import thunk from 'redux-thunk';

const initialState = {

}

const middlewares = [thunk]

const reducers = combineReducers({rootReducer, userReducer, degreeCourseReducer, degreeCourseApplicationsReducer})

const store = configureStore({reducer: reducers}, initialState, applyMiddleware(...middlewares))

const rootElement = 
document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

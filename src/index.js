//Task List:
//1. Add in all necessary components and libary methods.
// React Imports
import React from "react";
import ReactDOM from "react-dom";

// Redux Imports
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Local Imports
import "./index.css";
import App from "./App";
import { reducer } from './reducers';

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

//2. Create a store that includes thunk middleware support.
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    //3. Wrap the App component in a react-redux Provider element.
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);




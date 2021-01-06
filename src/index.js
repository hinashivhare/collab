import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import App from "./Components/App";
import { createStore,applyMiddleware, compose } from "redux";
import Reducers from './Reducers';
import thunk from "redux-thunk";
import 'antd/dist/antd.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);


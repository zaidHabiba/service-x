import React from 'react';
import ReactDOM from 'react-dom';
import './assets/global.css';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import StoreReducer from './redux/reducers/store';


ReactDOM.render(
    <Provider store={createStore(StoreReducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();

import React from 'react';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ListApp from '../reducers/index.js';

import routes from '../routes';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(ListApp, preloadedState);

const App = () => {
    return (
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
}

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.querySelector('#root')
);

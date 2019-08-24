import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// Normalizes HTML page for browsers
import 'normalize.css/normalize.css';
// SASS Stylesheet
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('app'));

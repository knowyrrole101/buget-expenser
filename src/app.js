import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Router
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setFilterText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// Normalizes HTML page for browsers
import 'normalize.css/normalize.css';
// SASS Stylesheet
import './styles/styles.scss';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'water bill', amount: 2500, createdAt: 100 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 6000, createdAt: 200 }));
store.dispatch(addExpense({ description: 'tickets', amount: 77000, createdAt: -500 }));
store.dispatch(setFilterText('bill'));
// store.dispatch(setFilterText('water'));

setTimeout(() => {
    store.dispatch(setFilterText('gas'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('visible expenses:', visibleExpenses);
console.log('all state objects:', store.getState());

// Reference Store above 
const jsx = (<Provider store={store}><AppRouter/></Provider>);

ReactDOM.render(jsx, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/AppRouter';
// Components
import AddExpensePage from './components/AddExpense';
import EditExpensePage from './components/EditExpense';
import ExpenseDashboardPage from './components/ExpenseDashboard';
import HelpPage from './components/Help';
import NotFoundPage from './components/NotFound';
// Normalizes HTML page for browsers
import 'normalize.css/normalize.css';
// SASS Stylesheet
import './styles/styles.scss';

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('app'));

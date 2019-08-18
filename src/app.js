import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
// Normalizes HTML page for browsers
import 'normalize.css/normalize.css';
// SASS Stylesheet
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is expense dashboard page.
    </div>
)

const AddExpensePage = () => (
    <div>
        This is Create expense page.
    </div>
)

const EditExpensePage = () => (
    <div>
        This is Edit Expense page.
    </div> 
)

const HelpPage = () => (
    <div>
        This is the help page.
    </div>
)


const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' exact={true} component={ExpenseDashboardPage}/>
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

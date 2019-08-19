import React from 'react';
// Link is used for client side routing and not server side
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// BrowserRouter can only have one child (so only switch or div...etc.)
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path='/' exact={true} component={ExpenseDashboardPage}/>
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
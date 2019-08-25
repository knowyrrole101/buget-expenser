import React from 'react';
// Connect Redux Store to React
import { connect } from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'; 

const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense List</h2>
             {props.expenses.map( (expense) => {
                 return <ExpenseListItem key={expense.id} expense={expense}></ExpenseListItem>
             })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        // filters: state.filters
    }
}

// Higher Order Component Pass in component, state and return an object
export default connect(mapStateToProps)(ExpenseList);

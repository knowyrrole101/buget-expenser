import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    return (
        <div>
            <h5>Description: {props.expense.description}</h5>
            <p>${props.expense.amount/100}.00 Date Created: {props.expense.createdAt}</p>
            <button onClick={()=>{
                props.dispatch(removeExpense({ id: props.expense.id }));
            }}>
                Remove
            </button>
        </div>       
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
}

export default connect()(ExpenseListItem);
import React from 'react';

const ExpenseListItem = (props) => {
    return (
        <div>
            <h5>Description: {props.expense.description}</h5>
            <p>${props.expense.amount/100}.00 Date Created: {props.expense.createdAt}</p>
        </div>       
    )
};

export default ExpenseListItem;

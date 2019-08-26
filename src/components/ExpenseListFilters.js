import React from 'react';
import { connect } from 'react-redux'; 
import { setFilterText, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => {
    return (
        <div>
            <input type='text' defaultValue={props.filters.text} 
                                onChange={(e)=>{props.dispatch(setFilterText(e.target.value))}}>
                                
            </input>
            <select value={props.filters.sortBy} 
                    onChange={(e)=>{if(e.target.value==='date') {
                        props.dispatch(sortByDate());
                    }else if (e.target.value ==='amount') {
                        props.dispatch(sortByAmount());
                    }}}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    )
};
// Grab state data from redux
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);
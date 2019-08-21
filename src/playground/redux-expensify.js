// Combine reducers (multiple smaller functions)
import { createStore, combineReducers } from 'redux';

const demo = {
    expenses: [{
      id: 'asdasd',
      description: 'January rent',
      note: 'This was the final payment for lease',
      amount: 54500,
      created_at: 0  
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount_or_date',
        startDate: undefined,
        endDate: undefined
    }
};
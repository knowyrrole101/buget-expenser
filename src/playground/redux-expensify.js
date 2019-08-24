// Combine reducers (multiple smaller functions)
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ES6 Spread Operator 

const addExpense = (
  { description='', 
    note='', 
    amount=0, 
    createdAt=0 
  }={}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

const removeExpense = (state={id=0}={}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: state.id
  }
};

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
  }
};

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      // Spread Operator es6
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      // let expense_to_remove = state.indexOf(action.id);
      // return [state.splice(expense_to_remove, 1)];
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
};



// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense)=> {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy == 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } 
  })
}

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100000, createdAt: -21000 }));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 356, createdAt: 10020 }));
const expense3 = store.dispatch(addExpense({ description: 'shoes', amount: 9999, createdAt: -1000 }));
store.dispatch(removeExpense({id: expense1.expense.id}));
store.dispatch(editExpense(expense3.expense.id, { amount: 555 }));

// Filter Dispatch Methods
console.log("Sorting by amount!");
store.dispatch(sortByAmount());
console.log("Sorting By Date");
store.dispatch(sortByDate());
// store.dispatch(setFilterText('coffee'));
// store.dispatch(setStartDate({startDate:125}));
// store.dispatch(setEndDate({endDate:1260000}));
// // store.dispatch(setEndDate());










// const user = {
//   name: 'Jen',
//   age: 23
// }
// // IN order to support object spread operator need to add plugin
// console.log({
//   // If age before spread object it wont override
//   ...user,
//   location: 'Philly',
//   age: 27
// });
// console.log(expense1.expense.id);
// const demo = {
//     expenses: [{
//       id: 'asdasd',
//       description: 'January rent',
//       note: 'This was the final payment for lease',
//       amount: 54500,
//       created_at: 0  
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount_or_date',
//         startDate: undefined,
//         endDate: undefined
//     }
// };
// const names = ['bob', 'mike', 'moon'];
// const new_array = [...names, 'barry'];
// console.log(new_array);
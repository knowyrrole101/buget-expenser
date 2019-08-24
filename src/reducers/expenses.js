const expensesReducerDefaultState = [];

// Expenses Reducer
export default (state = expensesReducerDefaultState, action) => {
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
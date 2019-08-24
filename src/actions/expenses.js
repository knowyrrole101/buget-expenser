import uuid from 'uuid';

export const addExpense = (
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
  
export const removeExpense = (state={id=0}={}) => {
    return {
      type: 'REMOVE_EXPENSE',
      id: state.id
    }
};
  
export const editExpense = (id, updates) => {
    return {
      type: 'EDIT_EXPENSE',
      id: id,
      updates: updates
    }
};
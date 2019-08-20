import { createStore } from 'redux';

const store = createStore((state = { count: 99 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return { 
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

console.log(store.getState());

let unsub = store.subscribe(() => {
    console.log(store.getState())
});

// Actions - Object that gets sent to the store
// walk, stop_walking, work, etc...

// Increment (ALL CAPS is convention in REDUX)
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 110
});

unsub();

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});





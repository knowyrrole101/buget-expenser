import { createStore } from 'redux';

// Action generators - functions that return action objects
// Functions to handle 
// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// };
// Destructured increment count 
const incrementCount = ( {incrementBy=1} ) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy 
    }
};
// Destructured args. First default is set for arg then destructured = {} to ensure its not necessary to pass into function.
const decrementCount = ( {decrementBy=1}={} ) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

const setCount = ({setCount=0}={}) => {
    return {
        type: 'SET',
        setCount: setCount
    }
};
// Redux Reducers 
// Reducers are pure functions. accepts state, action
// Pure functions are functions that dont depend on something outside of the function.
// Never directly change state or action. 
const countReducer = (state = { count: 99 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setCount
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

console.log(store.getState());

let unsub = store.subscribe(() => {
    console.log(store.getState())
});

// Actions - Object that gets sent to the store
// walk, stop_walking, work, etc...

// Increment (ALL CAPS is convention in REDUX)
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 110
// });
store.dispatch(
    incrementCount({incrementBy: 5})
);

store.dispatch(
    decrementCount({decrementBy: 12})
);

store.dispatch(
    setCount( {setCount: 152} )
);

unsub();





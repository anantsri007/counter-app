import { createStore } from 'redux';

const initialState = {
    counter: 0
};
const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': //here increment and decrement acting as reducer 
            return {   //
                ...state,
                counter: state.counter + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state;
    }
}

export const store = createStore(counter);
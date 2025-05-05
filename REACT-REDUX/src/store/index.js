import { createStore } from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState={ counter: 0, showCounter: true };

const counterSlice=createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter=state.counter+action.amount;
        }
    }
})

// const counterReducer=(state={ counter: 0 }, action)=>{
//     if(action.type==='increment'){
//         return {
//             counter: state.counter+1
//         }
//     }
//     else if(action.type==='increase'){
//         return {
//             counter: state.counter+action.payload
//         }
//     }
//     else if(action.type==='decrement'){
//         return {
//             counter: state.counter-1
//         }
//     }

//     return state;
// }


const store=configureStore({
    reducer: counterSlice.reducer
});

const counterActions=counterSlice.actions;

export {store, counterActions};
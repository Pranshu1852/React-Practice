import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { authSlice } from './auth';




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
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

store.subscribe(()=>{
    console.log('helloooo');
    
})

// const counterActions=counterSlice.actions;

export {store};
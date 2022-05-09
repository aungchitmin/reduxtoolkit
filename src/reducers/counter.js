import { createSlice } from "@reduxjs/toolkit";

// const counterReducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'increment':
//             return state + action.payload
//         case 'decrement':
//             return state -1
//         default:
//             return state;
//     }
// }
// export default counterReducer
const initialState = {
    value: 0
} // do this when i have more data to store in initialState
export const counterReducer = createSlice(
    {
        name: 'stupidname',
        initialState,
        reducers: {
            increment: (state, action) => {state.value += action.payload},
            decrement: state => {state.value -= 1}
        }
    }
)
//for actions
export const {increment, decrement} = counterReducer.actions
//for combined reducer i think
export default counterReducer.reducer
//for selector, store's specific data, call by reducer's name i put into store.js
export const selectCount = (store) => store.counterReducer.value; //store or state, just a name, a var in func.

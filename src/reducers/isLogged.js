// const loggedReducer = (state = false, action) => {
//     switch(action.type) {
//         case 'sign_in':
//             return !state;
//         default:
//             return state;
//     }
// }
// export default loggedReducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const loggedReducer = createSlice(
    {
        name: 'user-login',
        initialState,
        reducers: {
            signIn: state => {state.value = true},
            signOut: state => {state.value = false}
        }
    }
)
export const {signIn, signOut} = loggedReducer.actions;
export default loggedReducer.reducer;
export const selectLog = (store) => store.loggedReducer.value;

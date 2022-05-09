import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counter"
import loggedReducer from "./reducers/isLogged"
// import {loggedReducer} won't work, if export w/o default and there's only one, no need {}

export const store = configureStore(
    {
        reducer: {
            counterReducer,
            loggedReducer,
        }
    }
)
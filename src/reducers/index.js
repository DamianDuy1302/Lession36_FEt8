import { cartReducer } from "./cart"
import { combineReducers } from "redux"
export const allReducers = combineReducers({
    cartReducer,
}) 
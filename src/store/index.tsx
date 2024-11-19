import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./CartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer
})

//craete store with middle wire
//export const store= createStore(rootReducer, applyMiddleware(thunk));


export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
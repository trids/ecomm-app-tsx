import { createStore, combineReducers } from "redux";
import { cartReducer } from "./CartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
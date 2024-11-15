import { Product } from "./CartReducer";

// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Interfaces
interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: Product;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number; // Assuming payload is the product ID
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;

// Action Creators
export const addToCart = (product: Product): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './CartTypes';

// Action Types (if needed for external usage)
export const CART_ADD = 'cart/addToCartAsync';
export const CART_REMOVE = 'cart/removeFromCartAsync';
export const LOAD_DATA = 'cart/loadDataAsync'

// Async Actions
export const addToCartAsync = createAsyncThunk(
    CART_ADD,
    async (product: Product) => {
        try {
            const response = await axios.post('http://localhost:5000/cart', product);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to add item to cart');
        }
    }
);

export const removeFromCartAsync = createAsyncThunk(
    CART_REMOVE,
    async (productId: number) => {
        try {
          //  var productId1 = '' + productId;
            await axios.delete(`http://localhost:5000/cart/${productId}`);
            return productId;
        } catch (error) {
            console.log("here: ", error)
            throw new Error('Failed to remove item from cart');
        }
    }
);


// import { Product } from "./CartReducer";

// // Action Types
// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// // Action Interfaces
// interface AddToCartAction {
//     type: typeof ADD_TO_CART;
//     payload: Product;
// }

// interface RemoveFromCartAction {
//     type: typeof REMOVE_FROM_CART;
//     payload: number; // Assuming payload is the product ID
// }

// export type CartActionTypes = AddToCartAction | RemoveFromCartAction;

// // Action Creators
// export const addToCart = (product: Product): AddToCartAction => ({
//     type: ADD_TO_CART,
//     payload: product,
// });

// export const removeFromCart = (productId: number): RemoveFromCartAction => ({
//     type: REMOVE_FROM_CART,
//     payload: productId,
// });
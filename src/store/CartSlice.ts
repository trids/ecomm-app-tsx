import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './CartTypes';
import { addToCartAsync, removeFromCartAsync, removeAllFromCartAsync } from './CartActions';

const initialState: CartState = {
    cart: [],
    status: 'idle',
    error: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // You can add synchronous reducers here if needed
        clearCart: (state) => {
            state.cart = [];
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add to cart cases
            .addCase(addToCartAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cart.push(action.payload);
                state.error = null;
            })
            .addCase(addToCartAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to add to cart';
            })
            // Remove from cart cases
            .addCase(removeFromCartAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(removeFromCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cart = state.cart.filter(product => product.id !== action.payload);
                state.error = null;
            })
            .addCase(removeFromCartAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to remove from cart';
            })
            .addCase(removeAllFromCartAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(removeAllFromCartAsync.fulfilled, (state) => {
                state.status = 'succeeded';
                state.cart = [];
                state.error = null;
            })
    }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
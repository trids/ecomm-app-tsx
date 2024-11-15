import { CartActionTypes, ADD_TO_CART, REMOVE_FROM_CART } from './CartActions';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload),
            };

        default:
            return state;
    }
};
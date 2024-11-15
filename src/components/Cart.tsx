import React from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeFromCart } from "../store/CartActions";
import { AppDispatch } from "../store";
import "../style/Cart.css"

const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch<AppDispatch>();

    const handleRemove = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((product) => (
                        <li key={product.id} className="cart-item">
                            <img src={product.image} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{product.name}</p>
                                <p className="cart-item-price">${product.price.toFixed(2)}</p>
                                <button onClick={() => handleRemove(product.id)} className="cart-item-remove">
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Cart;

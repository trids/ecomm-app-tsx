import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeAllFromCartAsync, removeFromCartAsync } from "../store/CartActions";
import { AppDispatch } from "../store";
import "../style/Cart.css"

const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch<AppDispatch>();

    const handleRemoveAll = async () => {
        await dispatch(removeAllFromCartAsync());
    }
    const handleRemove = async (productId: number) => {
        try {
            await dispatch(removeFromCartAsync(productId)).unwrap();
            console.log("Product removed from cart");

        } catch (error) {
            console.error("Failed to remove product from cart:", error);
        }
    };

    var sum = 0;
    const tot = cart.map((product) => {
        sum = sum + product.price;
    });

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
                    <button onClick={() => handleRemoveAll()} className="cart-item-remove">
                        Remove All
                    </button>
                </ul>

            )}
            <div>Total: {sum}</div>
        </div>

    );
};


export default Cart;

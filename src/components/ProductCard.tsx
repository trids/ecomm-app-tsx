import React, { useState } from "react"
import '../style/ProductCard.css'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../store/CartActions';
import { RootState } from "../store";
import { AppDispatch } from "../store";
import { Product } from "../store/CartReducer";


interface ProductCardProps {
    product: {
        id: number,
        name: string,
        price: number,
        image: string
    }
}

const ProductCard: React.FC<ProductCardProps> =
    ({ product }) => {
        const { id, name, price, image } = product;
        const cart = useSelector((state: RootState) => state.cart.cart);
        const dispatch = useDispatch<AppDispatch>();

        const handleAdd = (product: Product) => {
            dispatch(addToCart(product));
        };

        return (
            <div className="product-card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>${price}</p>
                <p>Product Id: {id}</p>
                <button onClick={() => handleAdd(product)}>Add to cart</button>
                
            </div>
        )
    }

export default ProductCard;
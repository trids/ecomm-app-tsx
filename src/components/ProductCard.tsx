import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addToCartAsync } from '../store/CartActions';
import { Product } from '../store/CartTypes';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.cart);
  const isLoading = status === 'loading';

  const handleAddToCart = async (product: Product) => {
    try {
      await dispatch(addToCartAsync(product)).unwrap();
      console.log("Added product to cart:", product.id);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const cardStyles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    imageContainer: {
      width: '200px',
      height: '200px',
      position: 'relative' as const,
      overflow: 'hidden',
      borderRadius: '4px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: 'center'
    },
    title: {
      margin: '12px 0 8px 0',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333'
    },
    price: {
      margin: '8px 0',
      color: '#2c5282',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    productId: {
      color: '#666',
      fontSize: '14px',
      margin: '4px 0'
    },
    button: {
      backgroundColor: isLoading ? '#cbd5e0' : '#4299e1',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s',
      marginTop: '8px',
      width: '100%',
      ':hover': {
        backgroundColor: isLoading ? '#cbd5e0' : '#3182ce'
      }
    }
  };

  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={cardStyles.image}
        />
      </div>
      <h4 style={cardStyles.title}>{product.name}</h4>
      <p style={cardStyles.price}>${product.price}</p>
      <p style={cardStyles.productId}>Product Id: {product.id}</p>
      <button 
        onClick={() => handleAddToCart(product)}
        disabled={isLoading}
        style={cardStyles.button}
      >
        {isLoading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;


// import React, { useState } from "react"
// import '../style/ProductCard.css'
// import { useSelector, useDispatch } from "react-redux";
// //import { addToCart } from '../store/CartActions';
// import { RootState } from "../store";
// import { AppDispatch } from "../store";
// //import { Product } from "../store/CartReducer";


// interface ProductCardProps {
//     product: {
//         id: number,
//         name: string,
//         price: number,
//         image: string
//     }
// }

// const ProductCard: React.FC<ProductCardProps> =
//     ({ product }) => {
//         const { id, name, price, image } = product;
//         const cart = useSelector((state: RootState) => state.cart.cart);
//         const dispatch = useDispatch<AppDispatch>();

//         const handleAdd = (product: Product) => {
//             dispatch(addToCart(product));
//         };

//         return (
//             <div className="product-card">
//                 <img src={image} alt={name} />
//                 <h4>{name}</h4>
//                 <p>${price}</p>
//                 <p>Product Id: {id}</p>
//                 <button onClick={() => handleAdd(product)}>Add to cart</button>
                
//             </div>
//         )
//     }

// export default ProductCard;
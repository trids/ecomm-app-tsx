import React from "react";
import { Component } from "react";
import '../style/ProductList.css';
import ProductCard from "./ProductCard";
import productsData from '../data/products.json'

interface Product {
    id: number,
    name: string,
    price: number,
    image: string
}

interface ProductListProps {
    // products: Product[]
}

class ProductList extends Component<ProductListProps> {
    render() {
      
        return (
            <div className="product-list">
                {productsData.map((product) => (
                    <ProductCard key={product.id} product= {product} />
                    
                ))}
                
            </div>
        );
    }
}


export default ProductList
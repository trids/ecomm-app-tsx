import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

interface Products {
    id: number,
    name: string,
    price: number,
    image: string
  }

const FilteredProduct : React.FC = () => {
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => { 
        const fetchUsers = async () => {
          try {
            const response = await axios.get("http://localhost:5000/filteredProduct");
            setProducts(response.data);
          } catch (error) {
            console.error("error fetching users", error);
          }
        };
        fetchUsers();
      }, []);
    const navigate = useNavigate();

    return (
        <div> 
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default FilteredProduct
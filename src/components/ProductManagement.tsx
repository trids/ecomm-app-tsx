import React,{useState, useEffect} from "react"
import ProductCard from "./ProductCard"
// import productsData from '../data/products.json'
import { useNavigate } from "react-router-dom"
import axios from "axios";

interface Products {
    id: number,
    name: string,
    price: number,
    image: string
  }
const ProductManagement: React.FC = () => {

    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => { 
        const fetchUsers = async () => {
          try {
            const response = await axios.get("http://localhost:5000/products");
            setProducts(response.data);
          } catch (error) {
            console.error("error fetching users", error);
          }
        };
        fetchUsers();
      }, []);
    const navigate = useNavigate();
    // const [products, setProducts] = useState<Products[]>([]);

    return (
        <div>
            <button onClick={() => { navigate("/addProduct") }}>Add Product</button>
        
            
            
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
       
            
        </div>
    )
}

export default ProductManagement;
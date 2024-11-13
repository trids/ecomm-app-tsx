import React, { useState,ChangeEvent, FormEvent } from "react";
import '../style/Signup.css'
import axios from "axios";

const AddProduct: React.FC = () => {
    const [productName, setProductName] = useState<string>('');
    // A useState hook is used to define state of a component
    const [price, setPrice] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: ChangeEvent<HTMLInputElement>) => setter(event.target.value);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const productData = {productName, price, image};
        try{
        const response = await axios.post("http://localhost:5000/products", productData);
        } catch (error){
            console.log("error while saving data");
        }
    }

    return (
        <div className="signup-container">
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={handleInputChange(setProductName)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={handleInputChange(setPrice)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>url</label>
                    <input
                        type="text"
                        value={image}
                        onChange={handleInputChange(setImage)}
                        required
                    />
                </div>
                <button type="submit">Submit New Product</button>
            </form>
        </div>
    )

}

export default AddProduct
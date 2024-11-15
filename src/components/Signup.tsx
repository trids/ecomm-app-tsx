import React, { useState, ChangeEvent, FormEvent } from "react";
import '../style/Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup: React.FC = () => {
    const [fullName, setFullName] = useState<string>('');
    // A useState hook is used to define state of a component
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    //this is the event handler
    //CRUD -> C => create(post method)
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password != confirmPassword) {
            setError("Password don't match");
        } else {
            setError('');
            const userData = { fullName, email, password };
            console.log("user Data:", { fullName, email, password });
            alert("Signup Successful")

            try {
                const response = await axios.post("http://localhost:5000/users", userData);
                if (response.status === 201) {
                    console.log("User saved successfully");
                    setError('');
                } else {
                    console.log("error while saving data", response.data);
                    setError("Failed to signup, please try again")
                }
            } catch (error) {
                console.error("error sending data", error)
            }
        }
    }

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: ChangeEvent<HTMLInputElement>) => setter(event.target.value);

    return (
        <div className="signup-container">
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={handleInputChange(setFullName)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handleInputChange(setPassword)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange(setConfirmPassword)}
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="signup-button">create Account</button>
            </form>
            <button onClick={() => { navigate("/userList") }} style={{ margin: '10px' }} className="signup-button">
                Registered User
            </button>
            <p className="terms">
                By creating this account you agree to our <a href="/">Terms</a> and <a href="/">Privacy Policy</a>.
            </p>
        </div>
    )
}


export default Signup;
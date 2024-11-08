import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import TaxCalculator from './components/TaxCalculator';
import UserList from './components/componentDidMount';
import { useState } from "react";
import Counter from "./components/Updating";
import Signin from './components/Signin';
 
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <Header/>
      <ProductList/>
      <TaxCalculator/>
      <UserList/>
      <div>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <Counter count={count}></Counter>
      <Signin/>
      <Footer/>
    </div>
  );
}
  
export default App;

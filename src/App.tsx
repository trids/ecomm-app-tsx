import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import TaxCalculator from './components/TaxCalculator';
import { useState } from "react";
import Counter from "./components/Updating";
import Signin from './components/Signin';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductManagement from './components/ProductManagement';
import UserList from './components/UserList';
import AddProduct from './components/AddProduct';

function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/productManagement' Component={ProductManagement} />
          <Route path='/' Component={ProductList} />
          <Route path='/userList' Component={UserList} />
          <Route path='/addProduct' Component={AddProduct} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Router>
      <Footer />
      {/* <Header/>
      <ProductList/>
      <TaxCalculator/>
      <UserList/>
      <div>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <Counter count={count}></Counter>
      <Signin/>
      <Signup/>
      <Footer/> */}
    </div>
  );
}

export default App;

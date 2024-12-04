import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "./Login"; // Import the AuthService
import Swal from "sweetalert2";
import axios from "axios";
import productsData from '../data/products.json'

import "../style/Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount and when route changes
  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(AuthService.isAuthenticated());
    };

    checkAuthStatus();

    // Add listener for storage events to sync auth state across tabs
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = async () => {
    try {
      // Optional: Call backend logout route
      await axios.post('http://localhost:8000/api/auth/logout');

      // Client-side logout
      AuthService.logout();

      // Show logout success
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been successfully logged out',
        timer: 1500,
        showConfirmButton: false
      });

      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);

      // Fallback logout
      AuthService.logout();
      navigate('/login');
    }
  };

  interface Products {
    id: number,
    name: string,
    price: number,
    image: string
  }

  const searchItemsByName = () => {
    var el = (document.getElementById('search') as HTMLInputElement).value;
    const products = axios.get("http://localhost:5000/products");
    // const [products, setProducts] = useState<Products[]>([]);
    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     try {
    //       const response = await axios.get("http://localhost:5000/products");
    //       setProducts(response.data);
    //     } catch (error) {
    //       console.error("error fetching users", error);
    //     }
    //   };
    //   fetchUsers();
    // }, []);

    {
      productsData.map((product) => {
        alert(el)
        if (product.name.includes(el)) {
          alert(product.name)
          axios.post("http://localhost:5000/filteredProduct", product);
        }
      })
    };
    navigate("/filteredProduct");
  }

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">TBay</a>
      </div>
      <div className="header-search">
        <input id="search" type="text" placeholder="Search Items" />
        <button className="search-button" onClick={searchItemsByName}>Search</button>
      </div>
      <div className="header-action">
        <ul>
          <li>
            <button
              onClick={() => navigate("/cart")}
              className="action-button cart-button"
            >
              Cart
            </button>
          </li>

          {/* Conditional rendering based on authentication */}
          {!isAuthenticated ? (
            <>
              <li>
                <button
                  onClick={() => navigate("/signup")}
                  className="action-button signup-button"
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="action-button login-button"
                >
                  Login
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Product Management only visible when authenticated */}
              {isAuthenticated && (
                <li>
                  <button
                    onClick={() => navigate("/productmanagement")}
                    className="action-button product-management-button"
                  >
                    Product Management
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="action-button logout-button"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;


// import React from "react";

// import "../style/Header.css";
// import { Navigate, useNavigate } from "react-router-dom";

// const Header: React.FC = () => {
//   const navigate = useNavigate();

//   function handleClick() {
//     navigate('/cart');
//   }
//   return (
//     <header className="header">
//       <div className="header-logo">
//         <a href="/">TBay</a>
//       </div>
//       <div className="header-search">
//         <input type="text" placeholder="Search Items" />
//         <button style={{ marginLeft: "20px" }}>Search</button>
//       </div>
//       <div className="header-action">
//         <ul>
//           <li>
//             <a href="/productManagement">
//               <i className="fafa-shopping-cart"></i> Product Management
//             </a>
//           </li>
//           <li>
//             <button type="button" onClick={handleClick}>
//               cart
//             </button>
//           </li>
//           <li>
//             <a href="/signup">
//               <i className="fafa-user"></i> Sign In
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header; 
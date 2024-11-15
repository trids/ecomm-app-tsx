import React from "react";

import "../style/Header.css";
import { Navigate, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/cart');
  }
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">TBay</a>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search Items" />
        <button style={{ marginLeft: "20px" }}>Search</button>
      </div>
      <div className="header-action">
        <ul>
          <li>
            <a href="/productManagement">
              <i className="fafa-shopping-cart"></i> Product Management
            </a>
          </li>
          <li>
            <button type="button" onClick={handleClick}>
              cart
            </button>
          </li>
          <li>
            <a href="/signup">
              <i className="fafa-user"></i> Sign In
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header; 
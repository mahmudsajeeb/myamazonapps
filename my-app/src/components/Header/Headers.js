import React from 'react';
import './Header.css'
import logo from "../../images/logo.png"
const Headers = () => {
  return (
    <div className="headers">
      <img src={logo} alt="logo" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Mendatory</a>
      </nav>
    </div>
  );
};

export default Headers;
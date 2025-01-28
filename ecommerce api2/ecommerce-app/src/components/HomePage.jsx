import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the E-Commerce Application</h1>
      <p>Manage customers, products, and orders efficiently.</p>
      <div className="navigation-links">
        <Link to="/customers">Manage Customers</Link>
        <Link to="/products">Manage Products</Link>
        <Link to="/orders">Manage Orders</Link>
      </div>
    </div>
  );
};

export default HomePage;

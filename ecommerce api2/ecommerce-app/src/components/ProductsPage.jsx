import React, { useState } from "react";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
  ]);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="products-page">
      <h1>Products Management</h1>
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductsPage;

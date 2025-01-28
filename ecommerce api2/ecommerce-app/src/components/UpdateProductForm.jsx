import React, { useState } from "react";

const UpdateProductForm = ({ product, onSubmit }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...product, name, price: parseFloat(price), stock: parseInt(stock) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
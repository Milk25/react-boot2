import React from "react";

const ProductDetails = ({ product, onDelete }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductDetails;
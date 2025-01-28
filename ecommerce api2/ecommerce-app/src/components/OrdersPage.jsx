import React, { useState } from "react";
import PlaceOrderForm from "../components/PlaceOrderForm";

const OrdersPage = () => {
  const [products] = useState([
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
  ]);

  const [orders, setOrders] = useState([]);

  const handlePlaceOrder = (order) => {
    const product = products.find((p) => p.id === parseInt(order.selectedProduct));
    setOrders((prevOrders) => [
      ...prevOrders,
      {
        id: prevOrders.length + 1,
        customerName: order.customerName,
        product: product.name,
        quantity: order.quantity,
        totalPrice: product.price * order.quantity,
      },
    ]);
  };

  return (
    <div className="orders-page">
      <h1>Order Management</h1>
      <PlaceOrderForm products={products} onSubmit={handlePlaceOrder} />
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName} ordered {order.quantity} x {order.product} (Total: ${order.totalPrice})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;

import React, { useState } from "react";
import CreateCustomerForm from "../components/CreateCustomerForm";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      { ...newCustomer, id: prevCustomers.length + 1 },
    ]);
  };

  return (
    <div className="customers-page">
      <h1>Customers Management</h1>
      <CreateCustomerForm onSubmit={handleAddCustomer} />
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersPage;

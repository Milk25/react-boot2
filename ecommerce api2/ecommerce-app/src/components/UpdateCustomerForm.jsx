import React, { useState } from "react";

const UpdateCustomerForm = ({ customer, onSubmit }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...customer, name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default UpdateCustomerForm;
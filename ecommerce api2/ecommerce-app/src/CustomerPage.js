import { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

const CustomerPage = () => {
  const [formVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (customer) => {
    console.log('Customer submitted:', customer);
    setFormVisible(false);
    // Refresh the customer list or send to backend
  };

  return (
    <div className="container">
      <h1>Customer Management</h1>
      <button className="btn btn-primary mb-3" onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? 'Hide Form' : 'Add Customer'}
      </button>

      {formVisible && <CustomerForm onSubmit={handleFormSubmit} />}
      <CustomerList />
    </div>
  );
};

export default CustomerPage;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomersPage from './components/CustomersPage';
import ProductsPage from './components/ProductsPage';
import OrdersPage from './components/OrdersPage';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import CustomerPage from './CustomerPage';
import CustomerService from './CustomerService';



function App() {
  return (
    
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
    
  
  );
}

export default App;


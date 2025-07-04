import { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  return (
    <>
      <CustomerForm setCustomers={setCustomers} />
      <CustomerList customers={customers} />
    </>
  )
};

export default CustomerManagement;
import { useState } from 'react';

const CustomerForm = ({ setCustomers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const submitCustomer = (updateCustomer) => {
      setCustomers(prev => {
          return updateCustomer(prev);
      });
  };
  
    // For the purpose of this kata ignore the code above this comment. 
    // This will be covered in the next session with React hooks
    const updateCustomerList = (originalCustomerList) => {
        originalCustomerList.push({
            name: name,
            email: email,
            phone: phone,
            address: address
        });
        return originalCustomerList;
    }


  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => setName(value.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={value => setEmail(value.target.value)} value={email} />
      <input type="tel" placeholder="Phone" onChange={value => setPhone(value.target.value)} value={phone} />
      <input type="text" placeholder="Address" onChange={value => setAddress(value.target.value)} value={address} />
      <button type="submit" onClick={() => submitCustomer(updateCustomerList)}>Add customer</button>
    </div>
  );
};

export default CustomerForm;

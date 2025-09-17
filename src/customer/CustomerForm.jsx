import { useState } from 'react';

const CustomerForm = ({ setCustomers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const submitEmployee = () => {
    setCustomers(prev => {
      prev.push({
        name: name,
        email: email,
        phone: phone,
        address: address
      });
      return prev;
    });
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => setName(value.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={value => setEmail(value.target.value)} value={email} />
      <input type="tel" placeholder="Phone" onChange={value => setPhone(value.target.value)} value={phone} />
      <input type="text" placeholder="Address" onChange={value => setAddress(value.target.value)} value={address} />
      <button onClick={() => submitEmployee()}>Add customer</button>
    </div>
  )
}

export default CustomerForm;
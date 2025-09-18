import { useState } from 'react';

const CustomerForm = ({ setCustomers }) => {
  const [name, setName] = useState('');
  const [email, seEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const clearInputs = () => {
    setName('');
    seEmail('');
    setPhone('');
    setAddress('');
  };

  const submitEmployee = () => {
    // Solution Exercise 2
    // setCustomers(prev => {
    //   let newCustomer = [];
    //   for (let i = 0; i < prev.length; ++i) {
    //     newCustomer.push(prev[i]);
    //   }
    //   newCustomer.push({
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     address: address
    //   });
    //   return newCustomer;
    // });

    // Solution Exercise 2.1
    setCustomers(prev => [
      ...prev,
      {
        name: name,
        email: email,
        phone: phone,
        address: address
      }
    ]);
    clearInputs();
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => setName(value.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={value => seEmail(value.target.value)} value={email} />
      <input type="tel" placeholder="Phone" onChange={value => setPhone(value.target.value)} value={phone} />
      <input type="text" placeholder="Address" onChange={value => setAddress(value.target.value)} value={address} />
      <button onClick={() => submitEmployee()}>Add customer</button>
      <button onClick={() => clearInputs()}>Clear</button>
    </div>
  )
}

export default CustomerForm;
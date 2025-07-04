import { useState } from 'react';

let initalFormValue = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        name: action.value,
        email: state.email,
        phone: state.phone,
        address: state.address
      };
    }
    case 'SET_EMAIL': {
      return {
        name: state.name,
        email: action.value,
        phone: state.phone,
        address: state.address
      };
    }
    case 'SET_PHONE': {
      return {
        name: state.name,
        email: state.email,
        phone: action.value,
        address: state.address
      };
    }
    case 'SET_ADDRESS': {
      return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        address: action.value
      };
    }
    case 'CLEAR': {
      return initalFormValue;
    }
    default:
      return state;
  }
}


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
import { useReducer } from 'react';

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


const ClientForm = ({ setClients }) => {
  const [form, dispatchForm] = useReducer(reducer, initalFormValue);
  const submitEmployee = () => {
    setClients(prev => [
      ...prev,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address
      }
    ]);
    dispatchForm({ type: 'CLEAR' });
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => dispatchForm({ type: 'SET_NAME', value: value.target.value })} value={form.name} />
      <input type="email" placeholder="Email" onChange={value => dispatchForm({ type: 'SET_EMAIL', value: value.target.value })} value={form.email} />
      <input type="tel" placeholder="Phone" onChange={value => dispatchForm({ type: 'SET_PHONE', value: value.target.value })} value={form.phone} />
      <input type="text" placeholder="Address" onChange={value => dispatchForm({ type: 'SET_ADDRESS', value: value.target.value })} value={form.address} />
      <button onClick={() => submitEmployee()}>Add client</button>
      <button onClick={() => dispatchForm({ type: 'CLEAR' })}>Clear</button>
    </div>
  )
}

export default ClientForm;
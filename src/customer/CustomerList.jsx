const CustomerList = ({ customers }) => {
  let customerItems = [];

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    customerItems.push(
      <li key={customer.email}>
        <strong>{customer.name}</strong><br />
        <span>Email: {customer.email}</span><br />
        <span>Phone: {customer.phone}</span><br />
        <span>Address: {customer.address}</span><br />
      </li>
    );
  }

  return (
    <ul className="customer-list">
      {customerItems}
    </ul>
  );
};

export { CustomerList };

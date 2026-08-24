const CustomerList = ({ customers }) => {
  let customerItems = [];

  for (const customer of customers) {
    customerItems.push(
      <li key={customer.email}>
        <strong>{customer.name}</strong>
        <br />
        <span>Email: {customer.email}</span>
        <br />
        <span>Phone: {customer.phone}</span>
        <br />
        <span>Address: {customer.address}</span>
        <br />
      </li>
    );
  }

  return <ul className="customer-list">{customerItems}</ul>;
};

export { CustomerList };

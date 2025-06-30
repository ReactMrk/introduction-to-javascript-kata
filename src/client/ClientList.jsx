const ClientList = ({ clients }) => {
  let clientItems = [];

  for (let i = 0; i < clients.length; i++) {
    const client = clients[i];
    clientItems.push(
      <li key={client.email}>
        <strong>{client.name}</strong><br />
        <span>Email: {client.email}</span><br />
        <span>Phone: {client.phone}</span><br />
        <span>Address: {client.address}</span><br />
      </li>
    );
  }

  return (
    <ul className="client-list">
      {clientItems}
    </ul>
  );
};

export default ClientList;

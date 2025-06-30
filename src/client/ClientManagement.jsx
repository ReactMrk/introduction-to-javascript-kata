import { useState } from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";

let ClientManagement = () => {
  var [clients, setClients] = useState([]);
  return (
    <>
      <ClientForm setClients={setClients} />
      <ClientList clients={clients} />
    </>
  )
};

export default ClientManagement;
import { useState } from 'react';
import { ClientForm } from "./ClientForm";
import { ClientList as ShowClient } from "./ClientList";

let ClientManagement = () => {
  var [clients, setClients] = useState([]);
  return (
    <>
      <ClientForm setClients={setClients} />
      <ClientList clients={clients} />
    </>
  )
};

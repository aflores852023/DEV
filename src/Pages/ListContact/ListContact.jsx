import React from 'react';
import { contactos_data } from '../../data/contacto_data';
import ListaContacto from '../../Components/ListaContacto/ListaContacto';

const ListContact = () => {
  return (
    <div>
      <h1>Esta es una lista de contactos</h1>
      <ListaContacto contactos={contactos_data} />
    </div>
  );
}

export default ListContact;

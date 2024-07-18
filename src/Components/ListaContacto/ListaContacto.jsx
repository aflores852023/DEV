import React from 'react';
import ContactoTarjeta from '../ContactoTarjeta/ContactoTarjeta';

const ListaContacto = ({ contactos }) => {
  return (
    <div>
      {
        contactos.map((contacto) => (
          <ContactoTarjeta key={contacto.id} contacto={contacto} />
        ))
      }
    </div>
  );
}

export default ListaContacto;

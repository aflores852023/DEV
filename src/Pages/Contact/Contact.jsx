import React from 'react';
import { contactos_data } from '../../data/contacto_data' 
import ContactoTarjeta from '../../Components/ContactoTarjeta/ContactoTarjeta'
const Contact = () => {
  return (
    <div>
      <ContactoTarjeta contactos={contactos_data}  />   
      
      este es el contacto 
    </div>
  );
}

export default Contact;

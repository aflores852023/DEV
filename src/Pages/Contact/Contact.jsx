import React from 'react'
import { contactos_data } from '../../data/contacto_data' 
import ContactoTarjeta from '../../Components/ContactoTarjeta/ContactoTarjeta'
const Contact = () => {
  return (
    <div>
      <h1>  Esto son los datos del contacto  </h1>
      <ContactoTarjeta contacto={contactos_data}  />   
    </div>
  )
}
export default Contact;

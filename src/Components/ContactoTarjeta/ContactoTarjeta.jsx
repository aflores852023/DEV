import React from 'react';
const ContactoTarjeta = ({ contacto }) => {
  const { id, name, email, phone, thumbnail } = contacto; // destructuring de las propiedades del contacto
  return (
    <div className="contacto">
     {/*  <img src={thumbnail} alt={nombre} className="imagen-contacto" /> */}
      <div className="info-contacto">
      <span className="id" hidden={true} >{id}</span>
        <div className="nombre-y-hora">
        
          <span className="name">{name}</span>
          <span className="email">Correo: {email}</span>
        </div>
        <span className="phone">Telefono: {phone}</span>
      </div>
    </div>
  )
}
export default ContactoTarjeta;

import React from 'react';

const ContactoTarjeta = ({ contacto }) => {
  const { id, name, email, phone, thumbnail } = contacto; // destructuring de las propiedades del contacto

  return (
    <div className="contacto-item">
     {/*  <img src={thumbnail} alt={nombre} className="imagen-contacto" /> */}
      <div className="info-contacto">
        <div className="nombre-y-hora">
          <span className="name">{name}</span>
          <span className="email">{email}</span>
        </div>
        <span className="phone">{phone}</span>
      </div>
    </div>
  );
}

export default ContactoTarjeta;

import React from 'react';
import { Link } from 'react-router-dom';

const ListaChats = ({ chat }) => {
  const { id, name, thumbnail, lastmessage, time } = chat; // destructuring de las propiedades del contacto

  return (
    <div className="contact">
      <Link to={'/ChatWindow/' + id} className="contact-link">
        <div className="contact-img" style={{ backgroundImage: `url(${thumbnail})` }}></div>
        <div className="contact-info">
          <h3>{name}</h3>
          <p>{lastmessage}</p>
        </div>
        <div className="chat-time">{time}</div>
      </Link>

    </div>
  );
};

export default ListaChats;

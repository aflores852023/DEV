import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const VentanaChat = ({ mensaje }) => {  
  return (  
    <div className="chat-window">   {/* estructura de la ventana del chat */}
      <div className="message-container"> 
      <Link to="/contact">
          <img src="src/img/pepe.jpeg" className="profile-image" alt="Pepe" />
      </Link>
        {mensaje.map((msg) => (
          <div key={msg.id} className={`message ${msg.author === 'yo' ? 'my-message' : 'other-message'}`}> {/*  //*estructura de los mensajes del chat */ }
            <p><strong>{msg.author}</strong>: {msg.content}</p>     
            <span>{msg.fecha} - {msg.estado}</span> {/* //*fecha y estado del chat */ }
          </div>
        ))}
      </div>
    </div>
  );
};

export default VentanaChat;

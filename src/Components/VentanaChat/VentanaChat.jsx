import React, { useState } from 'react' //* importo el modulo de React */
import {Link} from 'react-router-dom' //* importo el modulo de react-router-dom */

const VentanaChat = ({ mensaje }) => {  //* defino el componente VentanaChat */
  return (  //*estructura de la ventana del chat */
   <div> 
      <Link to="/contact">
        <img src={mensaje[0].thumbnail} alt={mensaje[0].author} className="contact img" />
      </Link>
      
      <span className="chat-name">{mensaje[0].author}</span>

      <Link to="/ListaContacto">
        <button className="contact-button">Ver Contactos</button>
      </Link>

        {mensaje.map((msg) => (
          <div key={msg.id} className={`message ${msg.author === 'yo' ? 'my-message' : 'other-message'}`}> {/*  //*estructura de los mensajes del chat */ }
            <p><strong>{msg.author}</strong>: {msg.content}</p>     
            <span>{msg.fecha} - {msg.estado}</span> {/* //*fecha y estado del chat */ }
          </div>
        ))}
    </div>

  );
};

export default VentanaChat;

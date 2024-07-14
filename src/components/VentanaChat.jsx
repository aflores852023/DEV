import React, { useState } from 'react';

const VentanaChat = ({ mensaje }) => { 
  return (
    <div className="chat-window"> 
      <div className="message-container"> 
      <img src = "src\img\pepe.jpeg"  className='profile-image'/>
        {mensaje.map((msg) => (
          <div key={msg.id} className={`message ${msg.author === 'yo' ? 'my-message' : 'other-message'}`}>  
            <p><strong>{msg.author}</strong>: {msg.content}</p>
            <span>{msg.fecha} - {msg.estado}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VentanaChat;

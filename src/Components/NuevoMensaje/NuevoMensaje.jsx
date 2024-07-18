import React, { useState } from 'react';

const NuevoMensaje = ({ nuevochat }) => { // Componente para crear un nuevo chat
  const [MensajeIngresado, setearMensajeIngresado] = useState(''); // State para el input

  const handleSend = () => { // Función para enviar el nuevo chat
    const nuevoMensaje = {
      author: 'yo',
      content: MensajeIngresado,
      fecha: 'ahora',
      estado: 'entregado',
      id: Date.now(),
    };
    nuevochat(nuevoMensaje); // Llama a la función pasada por props
    setearMensajeIngresado(''); // Limpia el input
  };

  return ( 
    <div className="message-input">  
      <input // Input para escribir el nuevo chat
        type="text"  // Tipo de input
        value={MensajeIngresado} // Valor inicial del input
        onChange={(e) => setearMensajeIngresado(e.target.value)} // Actualiza el state al escribir en el input
      />
      <button onClick={handleSend}>Enviar</button> {/* Botón para enviar el nuevo chat */}
    </div>
  );
};

export default NuevoMensaje;

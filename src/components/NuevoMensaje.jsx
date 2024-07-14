import React, { useState } from 'react';

const NuevoMensaje = ({ nuevochat }) => {
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
      <input
        type="text"
        value={MensajeIngresado}
        onChange={(e) => setearMensajeIngresado(e.target.value)}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default NuevoMensaje;

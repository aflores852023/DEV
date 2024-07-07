import React, { useState } from 'react'

const MessageInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        author: 'yo',
        content: inputValue,
        fecha: 'ahora',
        estado: 'enviado',
        id: Date.now(),
      };
      onSendMessage(newMessage);
      setInputValue('');
    }
  }

  return (
    <div className="message-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={handleSend}>Enviar Mensaje</button>
    </div>
  )
}

export default MessageInput
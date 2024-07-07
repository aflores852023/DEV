import React from 'react'

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <div key={msg.id} className={`message ${msg.author === 'yo' ? 'my-message' : 'other-message'}`}>
          <p><strong>{msg.author}</strong>: {msg.content}</p>
          <span>{msg.fecha} - {msg.estado}</span>
        </div>
      ))}
    </div>
  )
}

export default ChatWindow

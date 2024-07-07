import React, { useState } from 'react'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import './components/App.css'

const DATA_MOCK = [
  { author: 'pepe', content: 'Hola?', fecha: 'ayer a 15:34', estado: 'visto', id: 1 },
  { author: 'yo', content: 'Sos real OMG', fecha: 'ayer a 15:35', estado: 'visto', id: 2 },
  { author: 'pepe', content: 'Obviamente, acaso lo dudaste?', fecha: 'ayer a 15:36', estado: 'visto', id: 3 },
  { author: 'yo', content: 'Jamas.', fecha: 'ayer a 15:37', estado: 'entregado', id: 4 },
];

function App() {
  const [messages, setMessages] = useState(DATA_MOCK)

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])

    setTimeout(() => {
      const responseMessage = {
        author: 'pepe',
        content: 'Esta es una respuesta automática.',
        fecha: 'ahora',
        estado: 'visto',
        id: messages.length + 2,
      }
      setMessages((prevMessages) => [...prevMessages, responseMessage])
    }, 1000)
  }

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={addMessage} />
    </div>
  )
}

export default App

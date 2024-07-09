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
  const arrayMensajes = useState(DATA_MOCK)
  const mensaje = arrayMensajes[0]
  const setearMensaje = arrayMensajes[1]

  const agregarMensaje = (nuevoMensaje) => {
    setearMensaje([mensaje.push(nuevoMensaje)])

    setTiempo(() => {
      const respuestaMensaje = {
        author: 'pepe',
        content: 'Esta es una respuesta automática al chat.',
        fecha: 'ahora',
        estado: 'visto',
        id: mensaje.length + 2,
      }
      setearMensaje((prevMensaje) => [mensaje.push(prevMensaje), respuestaMensaje])
    }, 1000)  
  }

  return (
    <div className="App">
      <ChatWindow mensaje={mensaje} />
      <MessageInput onSendMessage={agregarMensaje} />
    </div>
  )
}

export default App

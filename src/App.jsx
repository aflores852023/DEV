import React from 'react'
import './components/App.css'
import VentanaChat from './components/VentanaChat.jsx'

function App() {
  
  const mensajes = [
    { author: 'pepe', content: 'Hola?', fecha: 'ayer a 15:34', estado: 'visto', id: 1 },
    { author: 'yo', content: 'Sos real OMG', fecha: 'ayer a 15:35', estado: 'visto', id: 2 },
    { author: 'pepe', content: 'Obviamente, acaso lo dudaste?', fecha: 'ayer a 15:36', estado: 'visto', id: 3 },
    { author: 'yo', content: 'Jamas.', fecha: 'ayer a 15:37', estado: 'entregado', id: 4 },
    ]
  
 
  return (

    <div className="App">

   <div className="chat-window">
      <div className="message-container">
        <VentanaChat mensaje={mensajes}/>
     </div>     
    </div>
        <div className="message-input">
          <input type="text" placeholder="Escribe tu mensaje" />  
          <button>Enviar</button>
    </div>
    </div>

  )
}
    
export default App
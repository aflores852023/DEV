import React, { useState } from 'react' /* lo importo de React */
import './components/App.css'
import VentanaChat from './components/VentanaChat.jsx'
import NuevoMensaje from './components/NuevoMensaje.jsx'
import data from './data.js'

function App() {
  
  const [mensaje, setearMensajes] = useState(data)
  const AgregarMensaje = (nuevochat) => {

    setearMensajes([...mensaje, nuevochat])

      const ContenidoMensajeNuevo ={
        author: 'pepe',
        content: 'Esta es una respuesta automática.',
        fecha: 'ahora',
        estado: 'visto',
        id: mensaje.length + 2,
      }
    setearMensajes((MensajePrevio) => [...MensajePrevio, ContenidoMensajeNuevo])
  }
 
  return (

    <div className="App">
        <VentanaChat mensaje={mensaje}/>
        <NuevoMensaje nuevochat={AgregarMensaje}/>
      
    </div>

  )
}
    
export default App
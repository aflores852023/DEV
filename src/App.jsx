import React, { useState } from 'react' /* lo importo de React */
import './components/App.css'
import VentanaChat from './components/VentanaChat.jsx'
import NuevoMensaje from './components/NuevoMensaje.jsx'
import data from './data.js'

function App() {
  
  const [mensaje, setearMensajes] = useState(data) /* defino el state */
  const AgregarMensaje = (nuevochat) => { /* defino la función para agregar un nuevo chat */

    setearMensajes([...mensaje, nuevochat]) /* agrego el nuevo chat al state */

      const ContenidoMensajeNuevo ={ /* defino el contenido del nuevo chat */
        author: 'pepe',
        content: 'Esta es una respuesta automática de pepe.',
        fecha: 'ahora',
        estado: 'visto',
        id: mensaje.length + 2,
      }
    setearMensajes((MensajePrevio) => [...MensajePrevio, ContenidoMensajeNuevo])  /* agrego el nuevo chat al state */
  }
 
  return (

    <div className="App"> 
        <VentanaChat mensaje={mensaje}/> 
        <NuevoMensaje nuevochat={AgregarMensaje}/>
      
    </div>

  )
}
    
export default App
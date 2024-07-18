import React, { useState } from 'react' /* lo importo de React */
import './Components/Css/App.css'
import VentanaChat from './Components/VentanaChat/VentanaChat.jsx'
import NuevoMensaje from './Components/NuevoMensaje/NuevoMensaje.jsx'
import data from './data/data_chat.js'
import { Routes , Route } from 'react-router-dom'
import Contact from './Pages/Contact/Contact.jsx'
import Detail from './Pages/Detail/Detail.jsx'
import ListContact from './Pages/ListContact/ListContact.jsx'

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

    <Routes>
      <Route path="/" element={
        
        <div className="App"> 
        <VentanaChat mensaje={mensaje}/>  {/* //* componente para mostrar el chat */ }
        <NuevoMensaje nuevochat={AgregarMensaje}/>  {/* componente para crear un nuevo chat  */}
      
    </div>
      }

      />

      <Route path="/contact" element={<Contact/>} /> {/* //* ruta de contacto */}
      <Route path="/detail" element={<Detail/>} /> {/* //* ruta de contacto  */}
      <Route path="/ListaContacto" element={<ListContact/>} /> {/* //* ruta de contacto  */}  


        
      
    </Routes>

  )
}
    
export default App
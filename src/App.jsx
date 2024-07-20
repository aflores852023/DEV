import React, { useState } from 'react' /* lo importo de React */
import { Routes , Route } from 'react-router-dom' //* lo importo de react-router-dom */
import './Components/Css/App.css' //* importo el archivo de estilos */
import data from './data/data_chat.js' //* importo el archivo de datos */
import Contact from './Pages/Contact/Contact.jsx' // importo el componente Contact
import Detail from './Pages/Detail/Detail.jsx' // importo el componente Detail
import ListContact from './Pages/ListContact/ListContact.jsx' //
import ChatWindow from './Pages/ChatWindow/ChatWindow.jsx'
import ListChats from './Pages/ListChats/ListChats.jsx' 

function App() {
  
  return (
    <Routes>
      <Route path="/" element={ 
        <div className="App">  
        <ListChats contactos={data}/> 
        </div>
      }
      />  
      <Route path="/contact" element={<Contact/>} /> {/* //* ruta de contacto */}
      <Route path="/detail" element={<Detail/>} /> {/* //* ruta de contacto  */}
      <Route path="/ListaContacto" element={<ListContact/>} /> {/* //* ruta de contacto  */}  
      <Route path= "ChatWindow" element={<ChatWindow/>} />
    </Routes>
  )
}
export default App
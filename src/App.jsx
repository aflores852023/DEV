import React, { useState } from 'react' /* lo importo de React */
import { BrowserRouter, Routes , Route } from 'react-router-dom' //* lo importo de react-router-dom */
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
      <Route path='/' element={ 
        <div className="App">  
        <ListChats/> 
        </div>
      }
      />  
      <Route path= '/ListChats' element={<ListChats/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/detail' element={<Detail/>} /> 
      <Route path='/ListaContacto' element={<ListContact/>} />
      <Route path= '/ChatWindow/:id' element={<ChatWindow/>} />
    </Routes>
  )
}
export default App
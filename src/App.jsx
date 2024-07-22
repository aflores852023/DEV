import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import  './Components/Css/App.css'; // Importo el archivo de estilos
import Contact from '../src/Pages/Contact/Contact.jsx'; // Importo el componente Contact
import Detail from '../src/Pages/Detail/Detail.jsx'; // Importo el componente Detail
import ListContact from '../src/Pages/ListContact/ListContact.jsx'; // Importo el componente ListContact
import ChatWindow from '../src/Pages/ChatWindow/ChatWindow.jsx'; // Importo el componente ChatWindow
import ListChats from '../src/Pages/ListChats/ListChats.jsx'; // Importo el componente ListChats

function App() {
  return (
    <div className='body'>
      
        <div className="sidebar">
          <div className="sidebar-header">
            <Routes>
              <Route path='/' element={
                <div className="chat-container">
                  <ListChats />
                  <input className="contacts" type="text" placeholder="Search" />
                </div>
              } />
              <Route path='/ListChats' element={<ListChats />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/ListaContacto' element={<ListContact />} />
              <Route path='/ChatWindow/:id' element={<ChatWindow />} />
            </Routes>
          </div>
        </div>
      
    </div>
  );
}

export default App;

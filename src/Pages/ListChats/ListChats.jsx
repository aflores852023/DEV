import React from 'react' 
import  contactos_data  from '../../data/contacto_data'
import ListaChatContacto  from '../../Components/ListaChatContactos/ListaChatContacto' 
const ListChats = () => {
  return (
    <div>Lista de Chats
      <ListaChatContacto chats={contactos_data} /> 
    </div>
  )
}

export default ListChats
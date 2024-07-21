import React from 'react'
import ListaChats from '../ListaChats/ListaChats'
const ListaChatContacto = ({chats}) => {
    return (
    <div>
        {   
        chats.map((chat) => (   
            <ListaChats key={chat.id} chat={chat} />
            
        ))
        }
    </div>
)

}
export default ListaChatContacto
import React from 'react'
import {Link } from 'react-router-dom'
const ListaChats = ({ chat }) => {
    const { id, 
        name, 
        email, 
        phone, 
        thumbnail,
        lastmessage 
    } = chat
     // destructuring de las propiedades del contacto
    
 

    return (
<div className="chat-list-container">
    {/*  <img src={thumbnail} alt={nombre} className="chat-item .profile-pic" /> */}
    <Link to={ 'ChatWindow/'+ id } className="chat-item"  > 
    <div className="chat-item"> {name} </div>
    <span className="id" hidden={true} >{id}</span>
    <div className="chat-info .contact-lastmessage"> {lastmessage}</div>
    </Link>
</div>
)
}
export default ListaChats
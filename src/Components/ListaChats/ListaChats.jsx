import React from 'react'

const ListaChats = ({ contacto }) => {
    const { id, name, email, phone, thumbnail } = contacto; // destructuring de las propiedades del contacto

    return (
<div className="chat-list-container">
    {/*  <img src={thumbnail} alt={nombre} className="chat-item .profile-pic" /> */}
    <div className="chat-item">
    <span className="id" hidden={true} >{id}</span>
    <div className="chat-info .contact-name"> {name}</div>
    <div className="chat-info .contact-email"> {email}</div>
    <div className="chat-info .contact-phone"> {phone}</div>
    </div>                
</div>
)
}

export default ListaChats
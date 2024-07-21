import React,{ useState }from 'react'
import { useParams } from 'react-router-dom'
import '../../Components/Css/App.css' //* importo el archivo de estilos */
import VentanaChat from '../../Components/VentanaChat/VentanaChat.jsx' /* importo el componente VentanaChat */
import NuevoMensaje from '../../Components/NuevoMensaje/NuevoMensaje.jsx' // importo el componente NuevoChat
import data from '../../data/data_chat.js' //* importo el archivo de datos */
import  obtenerId  from  '../../helpers/chats'
const ChatWindow = () => {
    
  const parametros = useParams()
    /* console.log(parametros) */

  const [mensaje, setearMensajes] = useState(data) /* defino el state */
   
  
  const chatDetalle = obtenerId(parametros.id)
    console.log(chatDetalle)

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
    <div className="App">  {/* //* estructura de la ventana del chat */}
    <VentanaChat mensaje={mensaje}/>  {/* //* componente para mostrar el chat */ }
    <NuevoMensaje nuevochat={AgregarMensaje}/>  {/* componente para crear un nuevo chat  */}
  
  </div>
  )
}

export default ChatWindow
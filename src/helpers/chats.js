
import  contactos_data  from '../data/contacto_data'
const obtenerId = (id) => {
    contactos_data.find(chat => Number(chat.id) === Number(id)  ) 
}
export default obtenerId
import React from 'react'
const NavBar = (props) => {
    const isLogged = props.userData.isLogged
    const isAdmin = props.userData.isAdmin
    const lang = props.userData.lang
    const data ={
        en: {
            loguear: 'LogIn',
            create: 'Create Product',
        },
        es: {
            loguear: 'Registrarse',
            create: 'Crear Producto'
        }
    }
    const dataSelected = data[lang]
    return (
        <div>
            <span>Logo</span>
            <span>HOME</span>
            {
                !isLogged && <button>{dataSelected.loguear}</button>
            }
            {
                isAdmin && <button>{dataSelected.create}</button>
            }
        </div>
    )
}
export default NavBar
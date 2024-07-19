import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Header() {
    return (
        <>
        <div>
            <ul>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
                <li>Productos</li>
            </ul>
            <Link to="Aca">
                <button>Acá</button>
            </Link>
            <Link to="Hola">
                <button>Hola</button>
            </Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Header

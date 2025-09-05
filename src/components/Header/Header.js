import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../assets/css/landing.css";
const Header = () => {
    return (
        <div style={{width: '100%', padding: '10px', background: 'black'}}>
            <ul style={{display: 'flex', flexDirection: 'row', padding: '10px', justifyContent: 'space-evenly', listStyle: 'none', fontSize: '20px', width: '100%'}}>
                <li >
                    <NavLink to="/" className="menu-nav"> Inicio</NavLink>
                </li>
                <li className='menu-nav'>
                    <NavLink to="/ruta-prueba" className="menu-nav"> Prueba</NavLink>
                </li>
                <li>
                    <NavLink to="/segunda-ruta" className="menu-nav"> Segunda Ruta</NavLink>
                </li>
                <li>
                    <NavLink to="/pruebas/Jorge" className="menu-nav"> Pruebas</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
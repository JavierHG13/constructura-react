import React from 'react';
import '../estilos/navBar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/nostros">Nostros</Link></li>
                <li><Link to="/contactanos">Contactanos</Link></li>
            </ul>
        </nav>
    );
}


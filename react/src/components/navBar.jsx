import React from 'react';
import '../estilos/navBar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contactanos">Contáctanos</Link></li>
                <li><Link to="/crear-cuenta">Crear cuenta</Link></li>
                <li><Link to="/iniciar-sesion">Iniciar sesion</Link></li>
            </ul>

            <div className="menu-item">

                <Link to="/mi-cuenta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="icono-perfil" viewBox="0 0 24 24">
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
                    </svg>
                </Link>

                <div className="dropdown-menu">
                    <form>
                        <label htmlFor="username">Username or email address</label>
                        <input type="text" id="username" name="username" />
                        
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" />
                        
                        <button type="submit">LOGIN</button>
                        <Link to="/contactanos">Forgot your password?</Link><Link to="/contactanos">Sign up</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}


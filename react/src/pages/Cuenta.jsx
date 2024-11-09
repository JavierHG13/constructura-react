import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/cuenta.css'

export const MyAcount = () => {
    return (
        <div className='mi-cuenta-contenedor'>
            
            <div className='mi-cuenta'>
                <h2>MI CUENTA</h2>
                <h3>ACCEDER</h3>
                <div className='formulario-acceder'>
                    <form className='formulario'>
                        <label className='form-label' htmlFor="username">Nombre de usuario o correo electrónico *</label>
                        <input className='form-input' type="text" id="username" name="username" />
                        
                        <label className='form-label' htmlFor="password">Contraseña *</label>
                        <input className='form-input' type="password" id="password" name="password" />
                        
                        <button className='form-button' type="submit">LOGIN</button>
                        <Link className='form-link' to="/contactanos">Forgot your password?</Link>
                    </form>
                </div>
            </div>

            <div className='crear-cuenta'>
                <h2>CREAR CUENTA</h2>
                <h3>REGISTRARSE</h3>
                <div className='formulario-crear'>
                    <form className='formulario'>
                        <label className='form-label' htmlFor="email">Dirección de correo electrónico *</label>
                        <input className='form-input' type="text" id="email" name="email" />
                        
                        <label className='form-label' htmlFor="password">Contraseña *</label>
                        <input className='form-input' type="password" id="password" name="password" />

                        <p className='form-text'>
                            Se enviará un enlace a tu dirección de correo electrónico para establecer una nueva contraseña.
                        </p>
                        
                        <p className='form-text'>
                            Tu información personal será usada para mejorar la experiencia en el sitio web, para administrar el acceso a tu cuenta y otros propósitos descritos en nuestra política de privacidad.
                        </p>
                        <button className='form-button' type="submit">REGISTRARSE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

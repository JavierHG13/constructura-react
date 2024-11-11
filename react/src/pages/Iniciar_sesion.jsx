import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { showAlert } from '../components/alerta';
//import Cookies from "js-cookie";
import '../estilos/cuenta.css';
import { useAuth } from './Contexto/AuthContext';

export const IniciarSesion = () => {
    // Estado para el formulario de inicio de sesión y registro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(''); // Estado para mostrar errores en el login

    //const navigate = useNavigate(); // Hook para redirigir al usuario
    const { iniciarSesion } = useAuth();

    // Función para manejar el inicio de sesión
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Crear el objeto de datos para enviar a la API
        const data = {
            email: email,
            password: password
        };

        //Llamar a la funcion del contexto
        await iniciarSesion(data);

        /*try {
            // Hacer la solicitud POST a la API de login
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                showAlert("Inicio de sesion",result.message,"success")

                console.log(result)

                const cookies = Cookies.get();

                console.log(cookies)

                // Redirigir al usuario dependiendo del rol
                if (result.data.role === 'admin') {
                    navigate('/moduloadm'); // Redirigir al módulo 'pepa' para admin
                } else {
                    navigate('/clientedecons'); // Redirigir a la ruta del módulo 'Carro' para clientes
                }
            } else {
                //setLoginError(result.message || 'Error al iniciar sesión');
                showAlert("Inicio de sesion",result.message,"error")
            }
        } catch (error) {
    
            console.error('Error al conectar con la API:', error);
            
            setLoginError('Hubo un problema al conectar con el servidor');
        }*/
    };
    
    return (
        <div className='mi-cuenta-contenedor'>
            
            <div className='mi-cuenta'>
                <h2>MI CUENTA</h2>
                <h3>ACCEDER</h3>
                <div className='formulario-acceder'>
                    <form className='formulario' onSubmit={handleLogin}>
                        <label className='form-label' htmlFor="username">Nombre de usuario o correo electrónico *</label>
                        <input
                            className='form-input'
                            type="text"
                            id="username"
                            name="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        
                        <label className='form-label' htmlFor="password">Contraseña *</label>
                        <input
                            className='form-input'
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        <button className='form-button' type="submit">LOGIN</button>
                        {loginError && <p className="error">{loginError}</p>}
                        <Link className='form-link' to="/contactanos">Forgot your password?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

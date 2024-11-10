import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 

export const CrearCuenta = () => {

    // Estado para el formulario de inicio de sesión y registro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(''); // Estado para mostrar errores en el login

    const navigate = useNavigate(); // Hook para redirigir al usuario despues de crear la cuenta


    // Función para manejar el registro
    const handleRegister = async (e) => {
        e.preventDefault();

        // Crear el objeto de datos para enviar a la API
        const data = {
            email: email,
            password: password
        };

        try {
            // Hacer la solicitud POST a la API de registro
            const response = await fetch('http://localhost:4000/api/auth/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                // Aquí puedes hacer algo con el resultado de la API si la respuesta es exitosa
                console.log('Cuenta creada exitosamente', result);
            } else {
                // En caso de error, mostrar el mensaje
                console.error('Error al crear la cuenta:', result.message);
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
        }
    };

    return (
        <div className='crear-cuenta-contenedor'>

            <div className='crear-cuenta'>
                <h2>CREAR CUENTA</h2>
                <h3>REGISTRARSE</h3>
                <div className='formulario-crear'>
                    <form className='formulario' onSubmit={handleRegister}>
                        <label className='form-label' htmlFor="email">Dirección de correo electrónico *</label>
                        <input
                            className='form-input'
                            type="email"
                            id="email"
                            name="email"
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
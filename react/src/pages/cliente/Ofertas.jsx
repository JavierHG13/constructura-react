import React from 'react';
import { useAuth } from '../Contexto/AuthContext'; // Importa el hook useAuth

const OfertaComponent = () => {
    const { logout } = useAuth(); // Usa el hook useAuth para acceder al contexto

    const handleOnClick = () => {
        alert("Estas cerrando sesion")
        logout(); // Llama a la función logout cuando se haga clic en el botón
    };

    return (
        <div>
            <p>Pagina del cliente</p>
            <button onClick={handleOnClick}>Cerrar Sesion</button>
        </div>
    );
};

export default OfertaComponent;

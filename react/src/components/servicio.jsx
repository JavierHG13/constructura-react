import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ServicioComponente = ({ img, nombre }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/servicios/${nombre}`);
    };

    return (
        <div className="servicio-card" onClick={handleClick}>

            <img src={img} alt={nombre} />

            <div className="servicio-content">
                <h3>{nombre}</h3>
            </div>
        </div>
    )
}


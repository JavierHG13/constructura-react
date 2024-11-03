import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProyectoComponente = ({ img, nombre }) => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/proyectos/${nombre}`);
    };

    return (
        <div className="proyecto-card" onClick={handleClick}>

            <img src={img} alt={nombre} />

            <div className="proyecto-content">
                <h3>{nombre}</h3>
            </div>
        </div>
    )
}
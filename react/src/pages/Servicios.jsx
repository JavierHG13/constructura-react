import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../estilos/servicios.css';

export const Servicios = () => {
    const [servicios, setServicios] = useState([]);
    const navigate = useNavigate();

    const urlServicios = "http://localhost:4000/api/servicios/img";
    
    //Para mostrar la pagina de los detalles
    const handleClick = async(nombre) =>
    {
        navigate(`/servicios/${nombre}`);
    };


    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const response = await axios.get(urlServicios);
                
                setServicios(response.data.data);

            } catch (error) {
                console.error("Error al obtener los servicios:", error);
            }
        };

        fetchServicios();
    }, []);

    return (
        <div className='container'>
            <h1>SERVICIOS</h1>
            <p>Nos involucramos desde la planificación hasta la ejecución de proyectos de ingeniería civil y arquitectura, tales como; Obra civil, movimiento de tierras, construcción de carreteras, mejoramiento de suelos, pavimentos, urbanizaciones, levantamientos topográficos, elaboración de planos y diseño de interiores.</p>

            <div className="servicios-container">
                
                {servicios.map((servicio, index) => (
                    <div
                        key={index}
                        className="servicio-card"
                        onClick={() => handleClick(servicio.nombre)}>

                        <img src={servicio.imgURL} alt={servicio.nombre} />
                        
                        <div className="servicio-content">
                            <h3>{servicio.nombre}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

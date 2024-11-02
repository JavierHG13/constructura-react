// Servicios.js
import React, {useState, useEffect} from 'react';

import '../estilos/servicios.css';

import { ServicioComponente } from '../components/servicio.jsx';

export const Servicios = () => {

    /*const [servicios, setServicios] = useState([]);

    useEffect(() => {

        const fetchServicios = async () => {

            try {
                const response = await fetch('');
                const data = await response.json();
                setServicios(data);
            } catch (error) {
                console.error("Error al obtener los servicios:", error);
            }
        };

        fetchServicios(); 
    }, []);*/


    return (
        <div className='container'>
            <h1>SERVICIOS</h1>

            <p>
                Nos involucramos desde la planificación hasta la ejecución de proyectos de ingeniería civil y arquitectura, tales como; Obra civil, movimiento de tierras, construcción de carreteras, mejoramiento de suelos, pavimentos, urbanizaciones, levantamientos topográficos, elaboración de planos y diseño de interiores.
            </p>

            <div className="servicios-container">

                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/movimiento-de-tierras.jpg"
                    nombre="Obra civil"
                />

                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/diseno-de-interiores.jpeg"
                    nombre="Diseño de interiores"
                />

                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/mejoramiento-de-calles-y-construccion-de-carreteras_4.jpg"
                    nombre="Mejoramiento de suelos y pavimentos"
                />

                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/mejoramiento-de-suelos-y-pavimentos_5.jpg"
                    nombre="Mejoramiento de Calles y Construcción de Carreteras"
                />
                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/urbanizaciones.jpeg"
                    nombre="Urbanizaciones"
                />

                <ServicioComponente
                    img="https://www.constructoradaze.com/img/galerias/th/urbanizaciones.jpeg"
                    nombre="Urbanizaciones"
                />
            </div>
        </div>
    );
};

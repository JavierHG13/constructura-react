// Servicios.js
import React from 'react';

import '../estilos/proyectos.css';

import { ProyectoComponente } from '../components/proyecto.jsx';

export const Proyectos = () => {

    return (
        <div className='container'>
            <h1>PROYECTOS</h1>

            <div className="proyectos-container">

                <ProyectoComponente
                    img="https://www.constructoradaze.com/img/galerias/th/movimiento-de-tierras.jpg"
                    nombre="Movimiento de tierra"
                />

                <ProyectoComponente
                    img="https://www.constructoradaze.com/img/galerias/th/urbanizaciones_2.jpg"
                    nombre="Urbanizaciones"
                />

                <ProyectoComponente
                    img="https://www.constructoradaze.com/img/galerias/th/diseno-de-interiores.jpeg"
                    nombre="Diseño de interiores"
                />

                <ProyectoComponente
                    img="https://www.constructoradaze.com/img/galerias/th/mejoramiento-de-calles-y-construccion-de-carreteras_4.jpg"
                    nombre="Mejoramiento de suelos y pavimentos"
                />
            </div>
        </div>
    );
};

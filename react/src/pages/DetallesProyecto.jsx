import React from 'react';
import { useParams } from 'react-router-dom';

export const DetallesProyecto = () => {

    const { nombreProyecto } = useParams();

    return (
        <div>
            <h1>Detalles de: {nombreProyecto}</h1>

            <p>Información detallada sobre {nombreProyecto}.</p>
        </div>
    );
};

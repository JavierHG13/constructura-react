import React from 'react';
import { useParams } from 'react-router-dom';

export const Detalles = () => {
    const { nombreServicio } = useParams();

    return (
        <div>
            <h1>Detalles de: {nombreServicio}</h1>

            <p>Información detallada sobre {nombreServicio}.</p>
        </div>
    );
};

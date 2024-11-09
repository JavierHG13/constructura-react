import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const DetallesServicio = () => {
    const { nombreServicio } = useParams();

    const [servicio, setServicio] = useState(null);

    const [loading, setLoading] = useState(true);
    
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServicio = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/servicios/${nombreServicio}`);
                
        
                setServicio(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServicio();
    }, [nombreServicio]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Detalles de: {nombreServicio}</h1>
            {servicio ? (
                <div>
                    <p>Nombre: {servicio.nombre}</p>
                    <p>Descripción: {servicio.descripcion}</p>
                    <p>Precio: {servicio.precio}</p>

                    <div>
                        <img src={servicio.imgURL} alt={nombreServicio} />
                    </div>
                </div>
            ) : (
                <p>No hay información disponible sobre {nombreServicio}.</p>
            )}
        </div>
    );
};

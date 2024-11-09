import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const DetallesProyecto = () => {

    const { nombreProyecto } = useParams();

    const [proyecto, setProyecto] = useState(null);

    const [loading, setLoading] = useState(true);
    
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProyecto = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/proyectos/${nombreProyecto}`);
                
        
                setProyecto(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProyecto();
    }, [nombreProyecto]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Detalles de: {nombreProyecto}</h1>
            {proyecto ? (
                <div>
                    <p>Nombre: {proyecto.nombre}</p>
                    <p>Descripción: {proyecto.descripcion}</p>

                    <div>
                        <img src={proyecto.imgURL} alt={nombreProyecto} />
                    </div>
                </div>
            ) : (
                <p>No hay información disponible sobre {nombreProyecto}.</p>
            )}
        </div>
    );
};

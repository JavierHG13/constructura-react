// Servicios.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../estilos/proyectos.css';

export const Proyectos = () => {

    const [proyectos, setProyectos] = useState([]);
    const navigate = useNavigate();


    //Para mostrar la pagina de los detalles
    const handleClick = (nombre) =>
        { navigate(`/proyectos/${nombre}`); 
    };


    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/proyectos`);
                
                setProyectos(response.data.data);

                //console.log(response)

            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchProyectos();
    }, []);


    return (
        <div className='container'>
            <h1>PROYECTOS</h1>

            <div className="servicios-container">
                
                {proyectos.map((servicio, index) => (
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

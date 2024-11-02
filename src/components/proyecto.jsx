import React from 'react'

export const ProyectoComponente =  ({ img, nombre }) => {

    return (
        <div className="proyecto-card">

            <img src={img} alt={nombre} />

            <div className="proyecto-content">
                <h3>{nombre}</h3>
            </div>
        </div>
    )
}
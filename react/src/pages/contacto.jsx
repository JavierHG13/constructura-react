import React from 'react';
import '../estilos/contactForm.css'; // Asegúrate de tener este archivo de estilos.

export const ContactForm = () => {
    return (
        <div className="contacto-contenedor">

            <h2>Formulario de Contacto</h2>

            <form className="formulario-contacto">
                
                <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre *</label>
                    <input className="form-input" type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="correo">Correo *</label>
                    <input className="form-input" type="email" id="correo" name="correo" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="empresa">Empresa *</label>
                    <input className="form-input" type="text" id="empresa" name="empresa" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="cargo">Cargo *</label>
                    <input className="form-input" type="text" id="cargo" name="cargo" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="telefono">Teléfono *</label>
                    <input className="form-input" type="tel" id="telefono" name="telefono" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="direccion">Dirección *</label>
                    <input className="form-input" type="text" id="direccion" name="direccion" required />
                </div>
                <div className="form-group full-width">
                    <label className="form-label" htmlFor="mensaje">Mensaje *</label>
                    <textarea className="form-input" id="mensaje" name="mensaje" rows="4" required></textarea>
                </div>
                <div className="form-group full-width">
                    <button className="form-button" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}
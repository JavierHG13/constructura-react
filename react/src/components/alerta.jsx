import React from 'react'
import Swal from 'sweetalert2';


export const showAlert = (titulo, mensaje, tipo) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: tipo, // Puede ser "success", "error", "warning", "info"
        confirmButtonText: 'Cerrar',
        background: tipo === 'success' ? '#d4edda' : tipo === 'error' ? '#f8d7da' : '#ffffff',
        /*customClass: {
            popup: tipo === 'success' ? 'swal-popup-success' : tipo === 'error' ? 'swal-popup-error' : ''
        }*/
    });
};
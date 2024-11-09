import mongoose from "mongoose";

const servicioEsquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    actividades: [{
        actividad: {
            type: String,
            required: true,
            trim: true,
        }
    }],
    imgURL: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export default mongoose.model('Servicios', servicioEsquema);

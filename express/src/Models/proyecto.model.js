import mongoose, { Schema } from "mongoose";

const proyectoEsquema = new mongoose.Schema({
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
    locaciones: [
        {
            nombreProyecto: {
                type: String,
                required: true,
                trim: true,
            },
            ubicacion: {
                type: String,
                required: true,
                trim: true,
            },
            año: {
                type: Number,
                required: true,
            }
        }
    ],
    imagenes: [
        {
            type: String,
            required: true,
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Proyectos', proyectoEsquema);

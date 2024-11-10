import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        trim: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true, 
        //minlength: [6, 'La contraseña debe tener al menos 6 caracteres'], // Solo validación de longitud mínima
    },
    role: {
        type: String,
        enum: ['cliente', 'admin'], // Permite solo 'cliente' o 'admin'
        default: 'cliente' // Si no se especifica el rol, se asigna 'cliente' por defecto
    },
}, {
    timestamps: true 
});

export default mongoose.model('Usuarios', userSchema);

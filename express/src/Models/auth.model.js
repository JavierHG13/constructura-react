import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        trim: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true, 
    },
    role: {
        type: String,
        enum: ['cliente', 'admin'], // Permite solo 'cliente' o 'admin'
        default: 'publico' // Si no se especifica el rol, se asigna 'cliente' por defecto
    },
}, {
    timestamps: true 
});

export default mongoose.model('Usuarios', userSchema);

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Conexión a la base de datos MongoDB
        await mongoose.connect('mongodb://localhost/db_constructura', {
            useNewUrlParser: true,   // Usar el analizador de URL de MongoDB más reciente
            useUnifiedTopology: true, // Usar el motor de topología unificado
        });

        console.log("Se realizó la conexión a la base de datos");

    } catch (error) {
        console.error("Ocurrió un error al conectar a la base de datos:", error);
    }
};

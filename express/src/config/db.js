import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/db_constructura')

        console.log("Se realizo la conexion a la db")

    } catch (error) {

        console.log("Ocurrio un error", error)
    }

} 
import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from "cookie-parser";


//Importaciones de las rutas
import serviciosRoute from './src/Routes/Servicio.route.js';
import proyectoRoute from './src/Routes/proyecto.route.js';
import authRoute from './src/Routes/auth.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', //Permirir solicitudes solo desde este dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(cookieParser());
app.use(morgan('dev')) 
app.use(express.json()) 


app.use('/api', serviciosRoute);  // Ruta para servicios
app.use('/api', proyectoRoute);   // Ruta para proyectos
app.use('/api/auth', authRoute);  // Ruta para autenticación



export default app;


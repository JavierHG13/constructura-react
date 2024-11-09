import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'

//Importaciones de las rutas
import serviciosRoute from './src/Routes/Servicio.route.js';
import proyectoRoute from './src/Routes/proyecto.route.js';
import authRoute from './src/Routes/auth.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('dev')) 
app.use(express.json()) 


app.use('/api', serviciosRoute )
app.use('/api', proyectoRoute)
app.use('/api', authRoute)


export default app;


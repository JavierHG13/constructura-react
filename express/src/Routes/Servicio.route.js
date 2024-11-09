import { Router } from 'express';
import { obtenerServicios,obtenerServicioPorNombre, crearServicio, actualizarServicio, eliminarServicio} from '../Controllers/servicio.controller.js';

const router = Router();

router.get('/servicios', obtenerServicios);

router.get('/servicios/:nombre', obtenerServicioPorNombre);

router.post('/servicios', crearServicio);

router.put('/servicios/:id', actualizarServicio);

router.delete('/servicios/:id', eliminarServicio);

export default router;

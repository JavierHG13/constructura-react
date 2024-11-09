import { Router } from "express";
import { obtenerProyectos, crearProyecto, actualizarProyecto, eliminarProyecto,
    
    obtenerProyectoPorId } from '../Controllers/proyecto.controller.js'

const router = Router();

// Obtener todos los proyectos
router.get('/proyectos', obtenerProyectos);

// Crear un nuevo proyecto
router.post('/proyectos/crear', crearProyecto);

// Actualizar un proyecto por ID
router.put('/proyectos/actualizar/:id', actualizarProyecto);

// Eliminar un proyecto por ID
router.delete('/proyectos/eliminar/:id', eliminarProyecto);

// Obtener un proyecto específico por ID
router.get('/proyectos/:id', obtenerProyectoPorId);

export default router;

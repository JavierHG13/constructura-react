// routes/auth.route.js
import { Router } from 'express';
import { registro, login, logout } from '../Controllers/auth.controller.js';

const router = Router();

router.post('/registro', registro);  // Ruta para registrar usuarios
router.post('/login', login);        // Ruta para iniciar sesión
router.post('/logout', logout);      // Ruta para cerrar sesión

export default router;

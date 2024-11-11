// routes/auth.route.js
import { Router } from 'express';
import { registro, login, logout, verifyToken } from '../Controllers/auth.controller.js';
import { limiter } from '../Middlewares/Limiter.js'; // Importa el middleware de rate limiting

const router = Router();

router.post('/registro', registro); // Ruta para registrar usuarios
router.post('/login', limiter, login); // Aplicar el limitador en la ruta de inicio de sesión
router.get("/verify/:token", verifyToken);

router.post('/logout', logout); // Ruta para cerrar sesión

export default router;

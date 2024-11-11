import rateLimit from 'express-rate-limit';

// Configuración del limitador
export const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // Tiempo para de espera para nuevas peticiones
    max: 3, // Límite de solicitudes por IP
    //message: 'Demasiados intentos fallidos, intenta nuevamente después de 2 minutos',
    handler: (req, res, next) => {

        console.log(`Límite de solicitudes alcanzado para IP: ${req.ip}`);

        res.status(429).json({
            message: 'Demasiados intentos fallidos, intenta nuevamente mas tarde'
        });
    }
});

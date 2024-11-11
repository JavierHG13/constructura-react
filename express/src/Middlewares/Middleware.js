import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'Acceso denegado, token faltante' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified; // Se almacena la información del usuario en `req.user`

        next(); // Permite continuar con la siguiente función

    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};

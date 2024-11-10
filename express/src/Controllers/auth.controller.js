import User from '../Models/auth.model.js'
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js'

export const registro = async (req, res) => {
    const { email, password, role } = req.body; // Incluimos el rol en la desestructuración

    console.log("Datos recibidos:", req.body);

    try {
        if (!email || !password) {
            console.log("Error: Faltan datos de email o password");
            return res.status(400).json({ message: "El email y la contraseña son requeridos" });
        }

        console.log("Iniciando el hash de la contraseña...");
        const passwordHash = await bcrypt.hash(password, 10); // Hash de la contraseña
        console.log("Contraseña hasheada:", passwordHash);

        const newUser = new User({
            email,
            password: passwordHash,
            role: role || 'cliente' // Asigna 'cliente' si no se especifica el rol
        });

        console.log("Creando nuevo usuario con email:", email);

        const userSaved = await newUser.save(); // Guardar el usuario en la base de datos
        console.log("Usuario guardado en la base de datos:", userSaved);

        // Crear el token de acceso
        const token = await createAccesToken({ id: userSaved._id });
        console.log("Token generado:", token);

        res.cookie('token', token); // Guardar el token en una cookie
        console.log("Token guardado en la cookie");

        // Responder al cliente con los datos del usuario
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            role: userSaved.role, // Incluimos el rol en la respuesta
            createdAt: userSaved.createdAt,
            message: "Usuario creado correctamente"
        });

    } catch (error) {
        console.log("Error al registrar usuario:", error); // Log de error si ocurre algo
        res.status(500).json({ message: error.message });
    }
};




export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email }); // Buscar el usuario por email

        // Si no encuentra el usuario
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        // Comparar la contraseña recibida con la de la base de datos
        const isMatch = await bcrypt.compare(password, userFound.password);

        // Si la contraseña no coincide
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

        // Crear un token de acceso
        const token = await createAccesToken({ id: userFound._id, role: userFound.role });

        // Enviar el token al frontend
        res.cookie('token', token);

        // Devolver los datos del usuario junto con su rol
        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            data: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                role: userFound.role,  // Enviar el rol del usuario
                createdAt: userFound.createdAt
            }
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.status(200).json({ message: "Sesión terminada" });
}

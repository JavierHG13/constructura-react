import User from '../Models/auth.model.js'
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config/config.js';
import jwt from 'jsonwebtoken'

export const registro = async (req, res) => {
    const { email, password, role} = req.body;

    console.log("Datos recibidos:", req.body);

    try {
        if (!email || !password) {
            console.log("Error: Faltan datos de email o password");
            return res.status(400).json({ message: "El email y la contraseña son requeridos" });
        }

        const userSearch = await User.findOne({ email });

        if(userSearch){
            return res.status(400).json({ message: "El email correo ya esta en uso" });
        }

        if(password.length < 5){
            return res.status(400).json({ message: "La contraseña es demasiado debil" });
        }

        console.log("Iniciando el hash de la contraseña...");

        const passwordHash = await bcrypt.hash(password, 10); // Hash de la contraseña
        console.log("Contraseña hasheada:", passwordHash);

        const newUser = new User({
            email,
            password: passwordHash,
            role: role || 'cliente' // Asigna 'cliente' si no se especifica el rol
        });

        const userSaved = await newUser.save(); // Guardar el usuario en la base de datos

        // Crear el token de acceso
        const token = await createAccesToken({ id: userSaved._id });

        console.log("Token generado:", token);

        res.cookie('token', token); // Guardar el token en una cookie
     

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

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }
    

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
                Token:token,
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

export const verifyToken = async (req, res) => {

    //const { token } = req.cookies;
    const { token } = req.params; // Extraer el token de los parámetros de la URL
    console.log("este es el token" + token)
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {

      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound._id,
        email: userFound.email,
        role: userFound.role
      });
    });
};


export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.status(200).json({ message: "Sesión terminada" });
}

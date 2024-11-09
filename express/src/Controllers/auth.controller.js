import User from '../Models/auth.model.js'
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js'


export const registro = async (req, res) => {

    const { username, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10) //Encriptacion de la contraseña

    try {

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save() //Registramos a la bd

        const token = await createAccesToken({ id: userSaved._id })

        res.cookie('token', token) //Guardamos el token una una cooki del navegador

        //Retornamos algunos datos para el frontend
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            password: userSaved.email,
            createdAt: userSaved.createdAt,
            message:"Usuario creado correctamente"
        })

        //res.json({message:"Usuario creado correctamente"})
        //res.send('registrando')

    } catch (error) {

        //console.log("Se genero un error al guardar", error)
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {


    const { email, password } = req.body

    console.log(email,password)

    try {

        const userFound = await User.findOne({ email }) //Buscar el usuario por el correo a la bd

        //Si no encuntra al usuario
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" })

         //Comparar la contarseña enciava por la de la base de datos
        const isMatch = await bcrypt.compare(password, userFound.password)

        //Si la contraseña es incorrecta
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" })

        const token = await createAccesToken({ id: userFound._id }) //Creamos el token con el id encontrado

        res.cookie('token', token)

        //Retornamos algunos datos del usuario
        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            data: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt
            }
        });
        
        //res.json({message:"Usuario creado correctamente"})
        //res.send('registrando')

    } catch (error) {

        //console.log("Se genero un error al guardar", error)
        res.status(500).json({ message: error.message })
    }
}

export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.status(200).json({ message: "Sesión terminada" });
}

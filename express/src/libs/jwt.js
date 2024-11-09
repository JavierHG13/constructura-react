import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config/config.js'

export function createAccesToken(payload){

    return new Promise((resolve,reject) =>{

        jwt.sign(
            payload,
            TOKEN_SECRET, // Clave secreta segura desde variables de entorno
            {
                expiresIn: "1d", // Expira en 1 día
            },
            (err, token) =>{

                if(err) reject(err)
                
                resolve(token)
            }
        );

    });
}

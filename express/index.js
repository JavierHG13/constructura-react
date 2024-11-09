import app from './app.js'
import { connectDB} from './src/config/db.js'

//Ejecutamos la funcion para la conexion a la db
connectDB()

//Ejecutamos la aplicacion en el puerto 4000
app.listen(4000)

console.log('El servidor esta escuchando en el puerto',4000)
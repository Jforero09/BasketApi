// app.js ejecuta las rutas en el puerto usando express

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'


const app = express()

app.use(cors());
app.use(morgan('dev'));//mostrar peticiones que van llegando al back
app.use(express.json());//Para que convierta los datos en formato json y los pueda mostrar


app.use("/api",authRoutes); // Todas las rutas empiezan con /api para distinguirlo de las rutas del front

export default app; // para exportar lo que se inicializo y que se pueda ejecutar en index.js
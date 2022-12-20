import "dotenv/config" // Variables de entorno
import express from "express"
import cors from "cors"
import { router } from "./routes"
import db from "./config/mongo"

const PORT = process.env.PORT || 3001 // Puerto del API
const app = express()

app.use(cors())
app.use(express.json()) // Para recibir datos en formato json
app.use(router) // Uso de las rutas en ./routes/index.ts

// Conexión a la base de datos
db().then( () => console.log("Conexión existosa"))

app.listen(
    PORT,
    () => console.log(`Listo por el puerto ${PORT}`)
)

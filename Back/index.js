
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 4000;

//NOTE - Middlewares
app.use(cors());

//NOTE - Configuración de Dotenv
dotenv.config();
//NOTE - Conexión a la base de datos 
conectarDB();

//NOTE - Creación del servidor.
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. Que la fuerza te acompañe. Bro!`);
});

//REVIEW - Ruta especifica
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//REVIEW - Ruta general
app.use("/", (req, res) => {
  res.send("Hello World!");
});

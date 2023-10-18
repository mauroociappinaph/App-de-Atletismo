// Importa las dependencias
import express, { Application } from 'express';
import morgan from 'morgan';

// Crea una instancia de Express
const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
// Middleware de registro de solicitude
app.use(morgan('dev'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} & QUE LA FUERZA TE ACOMPAÑE`);
});
// Importa las dependencias
import express, { Application } from 'express';
import morgan from 'morgan';
import {connectDB} from "./config/db";
import resultsRouter from './routes/results/IndexResults'


// Crea una instancia de Express
const app: Application = express();

// Conecta a la base de datos
connectDB()

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
// Middleware de registro de solicitude
app.use(morgan('dev'));

app.use('/api/results', resultsRouter);




// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} & QUE LA FUERZA TE ACOMPAÑE`);
});



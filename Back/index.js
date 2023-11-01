import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

//SECTION - Importa las rutas
import atletasRoutes from "./routes/atletasRoutes.js";
import registrosRoutes from "./routes/registrosRoutes.js";
import competicionRoutes from "./routes/competicionesRoutes.js";
import tablaGeneralRoutes from "./routes/tablaGeneralRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

//SECTION - Configuración de Dotenv
dotenv.config();

//SECTION - Conexión a la base de datos
conectarDB();

///SECTION - Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SECTION - Configuración de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//SECTION - Rutas
app.use("/", atletasRoutes); //NOTE -  Ruta de atleta
app.use("/", registrosRoutes); //NOTE - Ruta de registro
app.use("/", competicionRoutes); //NOTE - Ruta de competición
app.use("/", tablaGeneralRoutes); //NOTE - Ruta de tabla general

//SECTION - Creación del servidor
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. Que la fuerza te acompañe. Bro!`);
});

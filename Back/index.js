import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import atletasRoutes from "./routes/atletasRoutes.js";
import registrosRoutes from "./routes/registrosRoutes.js";
import competicionRoutes from "./routes/competicionesRoutes.js";
import tablaGeneralRoutes from "./routes/tablaGeneralRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

//NOTE - Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//NOTE - Configuración de Dotenv
dotenv.config();

//NOTE - Conexión a la base de datos
conectarDB();

//NOTE - Creación del servidor.
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. Que la fuerza te acompañe. Bro!`);
});



//SECTION - Rutas
//LINK - Ruta de atleta
app.use("/atletas", atletasRoutes);
//LINK -Ruta de registro
app.use("/registros", registrosRoutes);
//LINK - Ruta de competición
app.use("/competiciones", competicionRoutes);
//LINK - Tabla General
app.use("/tablageneral", tablaGeneralRoutes);

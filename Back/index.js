require("dotenv").config();
const express = require("express")
const conectarDB = require("./config/db.js")
const cors = require('cors')
const bodyParser = require("body-parser")
const morgan = require("morgan")
const atletasRoutes = require("./routes/atletasRoutes.js")
const registrosRoutes = require("./routes/registrosRoutes.js")
const competicionRoutes = require("./routes/competicionesRoutes.js")
const tablaGeneralRoutes = require("./routes/tablaGeneralRoutes.js")
const userRoutes = require("./routes/userRoutes.js")


//SECTION - Importa las rutas

const app = express();
const PORT = process.env.PORT || 4000;

//SECTION - Configuración de Dotenv

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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//SECTION - Rutas
app.use("/", userRoutes); //NOTE - Ruta de usuario
app.use("/", atletasRoutes); //NOTE -  Ruta de atleta
app.use("/", registrosRoutes); //NOTE - Ruta de registro
app.use("/", competicionRoutes); //NOTE - Ruta de competición
app.use("/", tablaGeneralRoutes); //NOTE - Ruta de tabla general

//SECTION - Creación del servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on ${PORT}. Que la fuerza te acompañe. Bro!`);
});

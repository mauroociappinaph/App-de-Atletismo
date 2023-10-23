import express from "express";


import {
  getCompeticiones,
  createCompeticion,
  getCompeticionById,
  updateCompeticion,
  deleteCompeticion,
} from "../controllers/competicionControllers.js";

const router = express.Router();

//SECTION -  Rutas para Competiciones

//NOTE - Ruta para obtener todas las competiciones y para crear una nueva competición
router.route("/competiciones").get(getCompeticiones).post(createCompeticion);


//NOTE - Obtener una competicion por su ID
router.get("/competiciones/:id", getCompeticionById);

// NOTE - Actualizar una competición por su ID
router.put("/competiciones/:id", updateCompeticion);

//NOTE - Eliminar una competición por su ID
router.delete("/competiciones/:id", deleteCompeticion);

export default router;
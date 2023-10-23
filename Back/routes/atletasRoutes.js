import express from "express";
const router = express.Router();
import {
  getAtletas,
  createAtleta,
  getAtletaById,
  updateAtleta,
  deleteAtleta,
} from "../controllers/atletasController.js";

//SECTION -  Rutas para Atletas

//NOTE - Ruta para obtener todos los atletas y crear un atleta
router.route("/atletas").post(createAtleta).get(getAtletas);

//NOTE - Obtener , actualizar y eliminar un atleta por su ID
router
  .route("/atleta/:id")
  .get(getAtletaById)
  .put(updateAtleta)
  .delete(deleteAtleta);

export default router;

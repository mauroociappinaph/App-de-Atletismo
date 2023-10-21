import express from "express";

import {
  getAtletas,
  createAtleta,
  getAtletaById,
  updateAtleta,
  deleteAtleta,
} from "../controllers/atletasController.js";

const router = express.Router();

//SECTION -  Rutas para Atletas

//NOTE - Ruta para obtener todos los atletas
router.get("/atletas", getAtletas);

//NOTE - Ruta para crear un nuevo atleta
router.post("/atletas", createAtleta);

//NOTE - Obtener un atleta por su ID
router.get("/atleta/:id", getAtletaById);

// NOTE - Actualizar un atleta por su ID
router.put("/atleta/:id", updateAtleta);

// NOTE - Eliminar un atleta por su ID
router.delete("/atleta/:id", deleteAtleta);

export default router;

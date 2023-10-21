import express from "express";

import {
    getRegistros,
    createRegistro,
    getRegistroById,
    updateRegistro,
    deleteRegistro,
} from "../controllers/registroController.js";


const router = express.Router();

//SECTION -  Rutas para Registros

//NOTE - Ruta para obtener todos los registros
router.get("/registros", getRegistros);

//NOTE - Ruta para crear un nuevo registro
router.post("/registros", createRegistro);

//NOTE - Obtener un registro por su ID
router.get("/registros/:id", getRegistroById);

// NOTE - Actualizar un registro por su ID
router.put("/registros/:id", updateRegistro);

// NOTE - Eliminar un registro por su ID
router.delete("/registros/:id", deleteRegistro);

export default router;
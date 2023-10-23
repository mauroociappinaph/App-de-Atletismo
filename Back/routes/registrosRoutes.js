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

//LINK - Ruta para obtener todos los registros
router.get("/registros", getRegistros);

//LINK - Ruta para crear un nuevo registro
router.post("/registros", createRegistro);

//LINK - Obtener un registro por su ID
router.get("/registros/:id", getRegistroById);

//LINK - Actualizar un registro por su ID
router.put("/registros/:id", updateRegistro);

//LINK - Eliminar un registro por su ID
router.delete("/registros/:id", deleteRegistro);

export default router;
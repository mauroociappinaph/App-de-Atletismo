import express from "express";

import { calcularTablaGeneral } from "../controllers/tablaGeneralController.js";

const router = express.Router();

// SECTION - Ruta CALCULAR TABLA GENERAL

router.get("/:competicionId", calcularTablaGeneral);

export default router;
const { Router } = require("express")

const { calcularTablaGeneral } = require("../controllers/tablaGeneralController.js")

const router = Router();

// SECTION - Ruta CALCULAR TABLA GENERAL

router.get("/:competicionId", calcularTablaGeneral);

module.exports = router;
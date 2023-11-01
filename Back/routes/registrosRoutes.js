const { Router } = require("express");

const {
  getRegistros,
  createRegistro,
  getRegistroById,
  updateRegistro,
  deleteRegistro,
} = require("../controllers/registroController.js")

const router = Router();

//SECTION -  Rutas para Registros

//LINK - Ruta para obtener todos los registros y crear un nuevo registro.
router.route("/registros").get(getRegistros).post(createRegistro);

//LINK - Obtener un registro por su ID
router.get("/registros/:id", getRegistroById);

//LINK - Actualizar un registro por su ID
router.put("/registros/:id", updateRegistro);

//LINK - Eliminar un registro por su ID
router.delete("/registros/:id", deleteRegistro);

module.exports = router;

const { Router } = require("express");
const router = Router();
const { registerUsers, perfil } = require("../controllers/userControllers.js");

//SECTION -  Rutas para Users

//NOTE - Ruta para crear registros de Users
router.route("/users").post(registerUsers);

//NOTE - Ruta para perfil de Users
router.route("/perfil").get(perfil); 

module.exports = router;

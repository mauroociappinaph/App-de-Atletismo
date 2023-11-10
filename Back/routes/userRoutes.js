const { Router } = require("express");
const router = Router();
const {
  registerUsers,
  perfil,
  getAllUsers,
  getUserById,
  deleteUsers,
} = require("../controllers/userControllers.js");

//SECTION -  Rutas para Users

//NOTE - Ruta para crear registros de Users
router.route("/register").post(registerUsers);

//NOTE - Ruta para obtener todos los usuarios
router.route("/allusers").get(getAllUsers);

//NOTE - Ruta para obtener un usuario por ID y para borrar un usuario
router
  .route("/:id")
  .get(getUserById)
  //.delete(deleteUsers)
  //.put(updateAtleta)
 

//NOTE - Ruta para perfil de Users
router.route("/perfil").get(perfil);

module.exports = router;

const { Router } = require("express");
const router = Router();
const {registrar , perfil} = require("../controllers/userControllers.js");

router.get('/', registrar);

router.get("/perfil", perfil);

module.exports = router
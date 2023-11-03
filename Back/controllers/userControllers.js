const User = require("../models/user.js");
const registrar =  async (req, res) => {
try {
    const registrar = await User.create(req.body);
    res.json(registrar);
} catch (error) {
    res.status(400).json({ message: "Error al registrar el usuario", error });
}
};

const perfil = (req, res) => {
  res.send("Perfil");
};

module.exports = {
  registrar,
  perfil,
};

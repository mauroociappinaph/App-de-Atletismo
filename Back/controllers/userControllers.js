const User = require("../models/user.js");

// NOTE - Controller to register all users
const registerUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
};

const perfil = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Usuario no autenticado" });
  }
  const { nombre, email, role, created_at, is_active } = user;
  res.json({ nombre, email, role, created_at, is_active });
};

module.exports = perfil;


module.exports = perfil;

module.exports = {
  registerUsers,
  perfil,
};

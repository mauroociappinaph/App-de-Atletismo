const User = require("../models/user.js");

// NOTE - Controller to register all users
const registerUsers = async (req, res) => {
  const { nombre, email, role, created_at, is_active } = req.body;
  console.log(req.body);
  //STUB -  Prevenir usuarios duplicados
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const user = await User.create({
      nombre,
      email,
      role,
      created_at,
      is_active,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
};

// NOTE - Controller to get user profile
const perfil = (req, res) => {
  const { user } = req;
  if (!user) {
    return res.status(401).json({ message: "Usuario no autenticado" });
  }
  const { nombre, email, role, created_at, is_active } = user;
  res.json({ nombre, email, role, created_at, is_active });
};

// NOTE - Controller to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error getting users", error);
    res.status(400).json({ message: "Error getting users" });
  }
};

module.exports = {
  registerUsers,
  perfil,
  getAllUsers,
};

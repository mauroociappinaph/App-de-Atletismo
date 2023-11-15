const User = require("../models/user.js");

// NOTE - Controller to register all users

const registerUsers = async (req, res) => {
  const { nombre, email, password ,repetirPassword, created_at, is_active } = req.body;
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
      password,
      repetirPassword,
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

//NOTE - Controller to get user by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error getting user", error);
    res.status(400).json({ message: "Error getting user" });
  }
};

//NOTE - Controller to delete user
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(400).json({ message: "Error deleting user" });
  }
};



module.exports = {
  registerUsers,
  perfil,
  getAllUsers,
  getUserById,
  deleteUser,
};

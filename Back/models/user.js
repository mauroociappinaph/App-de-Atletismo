const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // El correo electrónico debe ser único
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  repetirPassword: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    default: "user", // Rol predeterminado (puede ser "user", "admin", u otros)
  },
  created_at: {
    type: Date,
    default: Date.now, // Fecha de creación automática
  },
  is_active: {
    type: Boolean,
    default: true, // Usuario activo por defecto
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

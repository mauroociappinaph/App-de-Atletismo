const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const generarID = require("../helpers/generarID.js");
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
    unique: true,
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
  confirmado: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: generarID(),
  },
  created_at: {
    type: Date,
    default: Date.now(), // Fecha de creación automática
  },
  is_active: {
    type: Boolean,
    default: true, // Usuario activo por defecto
  },
});

veterinarioSchema.pre("save", async function (next) {
  const veterinario = this;
  if (veterinario.isModified("password")) {
    veterinario.password = await bcrypt.hash(veterinario.password, 8);
    veterinario.repetirPassword = await bcrypt.hash(
      veterinario.repetirPassword,
      8
    );
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

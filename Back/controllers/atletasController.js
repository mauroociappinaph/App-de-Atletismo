const Atleta = require("../models/atletas.js")

// NOTE - Controlador para obtener todos los atletas
const getAtletas = async (req, res) => {
  try {
    const atletas = await Atleta.find();
    res.json(atletas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los atletas" });
  }
};


// NOTE - Controller to create a new athlete
const createAtleta = async (req, res) => {
  const { nombre, nacimiento, nacionalidad, sexo } = req.body;

  //NOTE - Valida que todos los campos requeridos estén presentes
  if (!nombre || !nacimiento || !nacionalidad || !sexo) {
    return res.status(400).json({ message: "Faltan campos obligatorios en la solicitud" });
  }

  // ANCHOR - Prevent duplicate athlete by name
  const existingAtleta = await Atleta.findOne({ nombre: { $regex: new RegExp("^" + nombre + "$", "i") }});
  if (existingAtleta) {
    return res.status(400).json({ message: "El atleta ya existe" });
  }

  try {
    const savedAtleta = await Atleta.create({ nombre, nacimiento, nacionalidad, sexo });
    res.json(savedAtleta);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el atleta", error });
  }
};

//NOTE - Controlador para obtener un atleta por su ID
const getAtletaById = async (req, res) => {
  try {
    const atleta = await Atleta.findById(req.params.id);
    if (!atleta) return res.status(404).json({ message: "Atleta no encontrado" });
    return res.json(atleta);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el atleta" });
  }
};

// NOTE - Actualizar un atleta por su ID
const updateAtleta = async (req, res) => {
  try {
    const atleta = await Atleta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atleta) return res.status(404).json({ message: "Atleta no encontrado" });
    res.json(atleta);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el atleta" });
  }
};

// NOTE - Eliminar un atleta por su ID
const deleteAtleta = async (req, res) => {
  try {
    const atleta = await Atleta.findByIdAndRemove(req.params.id);
    if (!atleta) {
      return res.status(404).json({ message: "Atleta no encontrado" });
    }
    res.json({ message: "Atleta eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el atleta" });
  }
};

module.exports = {
  getAtletas,
  createAtleta,
  getAtletaById,
  updateAtleta,
  deleteAtleta,
}
import Atleta from "../models/atletas.js";

// NOTE - Controlador para obtener todos los atletas
export const getAtletas = async (req, res) => {
  try {
    const atletas = await Atleta.find();
    res.json(atletas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los atletas" });
  }
};


// NOTE - Controlador para crear un nuevo atleta
export const createAtleta = async (req, res) => {
  const { nombre, nacimiento } = req.body;
  try {
    const savedAtleta = await Atleta.create({ nombre, nacimiento });
    res.json(savedAtleta);
  } catch (error) {
    res.status(400).json({ message: "Error creating the athlete", error });
  }
};

// NOTE - Controlador para obtener un atleta por su ID
export const getAtletaById = async (req, res) => {
  try {
    const atleta = await Atleta.findById(req.params.id);
    if (!atleta) {
      return res.status(404).json({ message: "Atleta no encontrado" });
    }
    res.json(atleta);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el atleta" });
  }
};

// NOTE - Actualizar un atleta por su ID
export const updateAtleta = async (req, res) => {
  try {
    const atleta = await Atleta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!atleta) {
      return res.status(404).json({ message: "Atleta no encontrado" });
    }
    res.json(atleta);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el atleta" });
  }
};

// NOTE - Eliminar un atleta por su ID
export const deleteAtleta = async (req, res) => {
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

import Registro from "../models/registro.js";

// NOTE - Controlador para obtener todos los registros
export const getRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los registros",
        error: error.message,
      });
  }
};

// NOTE - Controlador para crear un nuevo registro
export const createRegistro = async (req, res) => {
  const {
    atleta,
    competicion,
    fecha,
    alturaListon,
    numeroIntentos,
    resultado,
    observaciones,
  } = req.body;
  try {
    const savedRegistro = await Registro.create({
      atleta,
      competicion,
      fecha,
      alturaListon,
      numeroIntentos,
      resultado,
      observaciones,
    });
    res.json(savedRegistro);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating the registro", error: error.message });
  }
};

// NOTE - Controlador para obtener un registro por su ID

export const getRegistroById = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }
    res.json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el registro" });
  }
}

//NOTE - Actualizar un registro por su ID
export const updateRegistro = async (req, res) => {
  const { id } = req.params; // 
  const updateData = req.body; 
  try {
    const registroActualizado = await Registro.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!registroActualizado) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }

    res.json(registroActualizado);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al actualizar el registro",
        error: error.message,
      });
  }
};

//NOTE - Eliminar un registro por su ID

export const deleteRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndRemove(req.params.id);
    if (!registro) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el registro" });
  }
}
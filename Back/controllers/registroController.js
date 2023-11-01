const Registro = require("../models/registro.js")

// NOTE - Controlador para obtener todos los registros
const getRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los registros",
      error: error.message,
    });
  }
};

// NOTE - Controlador para crear un nuevo registro
const createRegistro = async (req, res) => {
  const {
    atleta,
    competicion,
    fecha,
    alturaListon,
    resultado,
    observaciones,
  } = req.body;

  try {
    const registrosAtleta = await Registro.find({ atleta, competicion });
    const lastRegistro = registrosAtleta[registrosAtleta.length - 1];

    let savedRegistro;

    if (!lastRegistro || resultado) {
      // Si es el primer registro del atleta o si el resultado es true (éxito), avanzar automáticamente.
      savedRegistro = await Registro.create({
        atleta,
        competicion,
        fecha,
        alturasSuperadas: lastRegistro
          ? [...lastRegistro.alturasSuperadas, alturaListon]
          : [alturaListon],
        numeroIntentos: 3, // Reiniciar el número de intentos a 3.
        resultado,
        observaciones,
      });
    } else {
      // Verificar si ha alcanzado los 3 intentos fallidos en la misma altura.
      if (lastRegistro.numeroIntentos === 1) {
        // Si ya ha agotado los 3 intentos en la misma altura, queda fuera de la competencia.
        savedRegistro = await Registro.create({
          atleta,
          competicion,
          fecha,
          alturasSuperadas: lastRegistro.alturasSuperadas,
          numeroIntentos: 0, // 0 intentos restantes.
          resultado: false, // Salto nulo.
          observaciones,
        });
      } else {
        savedRegistro = await Registro.create({
          atleta,
          competicion,
          fecha,
          alturasSuperadas: lastRegistro.alturasSuperadas,
          numeroIntentos: lastRegistro.numeroIntentos - 1, // Reducir el número de intentos.
          resultado,
          observaciones,
        });
      }
    }

    res.json(savedRegistro);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating the registro", error: error.message });
  }
};


// NOTE - Controlador para obtener un registro por su ID

const getRegistroById = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }
    res.json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el registro" });
  }
};

//NOTE - Actualizar un registro por su ID
const updateRegistro = async (req, res) => {
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
    res.status(500).json({
      message: "Error al actualizar el registro",
      error: error.message,
    });
  }
};

//NOTE - Eliminar un registro por su ID

const deleteRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndRemove(req.params.id);
    if (!registro) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el registro" });
  }
};

module.exports = {
  getRegistros,
  createRegistro,
  getRegistroById,
  updateRegistro,
  deleteRegistro,
}
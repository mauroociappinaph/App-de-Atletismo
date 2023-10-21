import Registro from "../models/registro.js";

// NOTE - Controlador para obtener todos los registros
export const getRegistros = async (req, res) => {
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
    let savedRegistro;

    if (numeroIntentos >= 3) {
      //ANCHOR -   Si se alcanzan los 3 intentos, se considera un salto nulo
      savedRegistro = await Registro.create({
        atleta,
        competicion,
        fecha,
        alturaListon,
        numeroIntentos: 3, // ANCHOR Fijar el número de intentos en 3
        resultado: false, // ANCHOR Establecer el resultado en falso (nulo)
        observaciones,
      });
    } else if (resultado === true) {
      // ANCHOR Si se supera la altura en el primer o segundo intento, avanzar automáticamente
      savedRegistro = await Registro.create({
        atleta,
        competicion,
        fecha,
        alturaListon,
        numeroIntentos: numeroIntentos, // ANCHOR Mantener el número de intentos actual
        resultado: true, //ANCHOR  Establecer el resultado en verdadero (éxito)
        //REVIEW - Si esta en los modelos.
        observaciones,
      });
    } else {
      // ANCHOR Si no se supera la altura y no se han agotado los intentos, guardar el registro
      savedRegistro = await Registro.create({
        atleta,
        competicion,
        fecha,
        alturaListon,
        numeroIntentos,
        resultado,
        observaciones,
      });
      // FIXME - No puede tener tres intenteos seguidos fallidos en la misma altura. Si los consigue queda eliminado
    }

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
};

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
    res.status(500).json({
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
};

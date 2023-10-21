
// NOTE  Controlador para obtener todas las competiciones
export const getCompeticiones = async (req, res) => {
  try {
    const competiciones = await Competicion.find();
    res.json(competiciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las competiciones", error: error.message });
  }
};

// NOTE Controlador para crear una nueva competición
export const createCompeticion = async (req, res) => {
  const { nombre, categoria, disciplinas, fechaInicio, fechaFin, lugar, descripcion } = req.body;
  try {
    const nuevaCompeticion = await Competicion.create({
      nombre,
      categoria,
      disciplinas,
      fechaInicio,
      fechaFin,
      lugar,
      descripcion
    });
    res.json(nuevaCompeticion);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la competición", error: error.message });
  }
};

// NOTE Controlador para obtener una competición por su ID
export const getCompeticionById = async (req, res) => {
  try {
    const competicion = await Competicion.findById(req.params.id);
    if (!competicion) {
      return res.status(404).json({ message: "Competicion no encontrada" });
    }
    res.json(competicion);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la competición", error: error.message });
  }
};

// NOTE Controlador para actualizar una competición por su ID
export const updateCompeticion = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const competicionActualizada = await Competicion.findByIdAndUpdate(id, updateData, { new: true });
    if (!competicionActualizada) {
      return res.status(404).json({ message: "Competicion no encontrada" });
    }
    res.json(competicionActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la competición", error: error.message });
  }
};

// NOTE Controlador para eliminar una competición por su ID
export const deleteCompeticion = async (req, res) => {
  try {
    const competicion = await Competicion.findByIdAndRemove(req.params.id);
    if (!competicion) {
      return res.status(404).json({ message: "Competicion no encontrada" });
    }
    res.json({ message: "Competicion eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la competición", error: error.message });
  }
};


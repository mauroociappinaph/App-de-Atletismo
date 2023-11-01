const Registro = require("../models/registro.js")
const Atleta = require("../models/atletas.js")


const calcularTablaGeneral = async (req, res) => {
    try {
      const atletas = await Atleta.find();
      const tablaGeneral = {};
  
      for (const atleta of atletas) {
        const registros = await Registro.find({ atleta: atleta._id, competicion: req.params.competicionId });
        const saltosNulos = registros.filter(registro => registro.resultado === false).length;
        tablaGeneral[atleta.nombre] = saltosNulos;
      }
  
      // Encuentra al atleta con la menor cantidad de saltos nulos
      let ganador = '';
      let saltosNulosMinimos = Infinity;
  
      for (const nombreAtleta in tablaGeneral) {
        if (tablaGeneral[nombreAtleta] < saltosNulosMinimos) {
          saltosNulosMinimos = tablaGeneral[nombreAtleta];
          ganador = nombreAtleta;
        }
      }
  
      res.json({ tablaGeneral, ganador, saltosNulosMinimos });
    } catch (error) {
      res.status(500).json({ message: "Error al calcular la tabla general" });
    }
  };
  module.exports = {
    calcularTablaGeneral
  }
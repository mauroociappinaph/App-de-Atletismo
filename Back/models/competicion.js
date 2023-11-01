const mongoose = require("mongoose");

const competicionSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    //REVIEW -
    categoria: {
      type: String,
      enum: ["Hombres", "Mujeres"],
      required: true,
    },
    disciplinas: {
      type: [String],
      enum: [
        "Salto en alto",
        "Salto con pértiga",
        "Salto de longitud",
        "Salto triple",
        "Lanzamiento de disco",
        "Lanzamiento de jabalina",
        "Lanzamiento de martillo",
      ],
      required: true,
    },
    fechaInicio: {
      type: Date,
      default: Date.now(),
    },
    fechaFin: {
      type: Date,
    },
    lugar: String,
    descripcion: String,
    resultados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Registro",
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Competicion = mongoose.model("Competicion", competicionSchema);

module.exports = Competicion;

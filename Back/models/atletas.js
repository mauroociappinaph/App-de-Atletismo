const mongoose = require("mongoose");

const atletaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    nacimiento: {
      type: String,
      required: true,
      trim: true,
    },
    nacionalidad: {
      type: String,
      required: true,
      trim: true,
    },
    sexo: {
      type: String,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

const Atleta = mongoose.model("Atleta", atletaSchema);

module.exports = Atleta;

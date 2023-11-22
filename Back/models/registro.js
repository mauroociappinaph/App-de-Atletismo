const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema(
  {
    atleta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Atleta",
      required: true,
    },
    competicion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competicion",
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    alturaListon: {
      type: Number,
      //! REVIEW
      // required: true,
      default: null,
      min: 0,
    },
    alturasSuperadas: {
      type: [Number], //NOTE -  Un array para almacenar las alturas superadas
      default: [],
    },
    numeroIntentos: {
      type: Number,
      required: true,
      default: null,
      max: 3,
    },
    resultado: {
      type: Boolean,
      default: null,
      required: true,
    },
    observaciones: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Registro = mongoose.model("Registro", registroSchema);

module.exports = Registro;

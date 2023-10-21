import mongoose from 'mongoose';

const registroSchema = new mongoose.Schema({
  atleta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Atleta',
    required: true,
  },
  competicion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Competicion',
    required: true,
  },
  fecha: {
    type: Date,
    required: true
  },
  alturaListon: {
    type: Number,
    required: true,
    default: null,
    validate: {
      validator: (alturaListon) => alturaListon >= 0,
      message: 'La altura de liston debe ser un número positivo'
    },
    required: true , 
    
    },
    alturasSuperadas: {
      type: [Number], // Un array para almacenar las alturas superadas
      default: [],
    },
  numeroIntentos: {
    type: Number,
    required: true,
    default: null,
    max: 3,
    },
    resultado :{
      type: Boolean,
      default: null,
      required: true
    },
    observaciones:{
      type: String,
      default: null
    }
});

const Registro = mongoose.model('Registro', registroSchema);

export default Registro;
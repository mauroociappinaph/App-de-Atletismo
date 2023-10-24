import mongoose from 'mongoose';

const atletaSchema = new mongoose.Schema({
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
    type: Number, 
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
   },
  
);

//REVIEW - Agregar
//Nacionalidad y Sexo 

const Atleta = mongoose.model('Atleta', atletaSchema);

export default Atleta;
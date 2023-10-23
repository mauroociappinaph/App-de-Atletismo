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
  },
   {
     timestamps: true,
   },
  
);

const Atleta = mongoose.model('Atleta', atletaSchema);

export default Atleta;
// Crea una base de datos con moongoose 

import mongoose from 'mongoose';

mongoose.connect('');

    const conectarDB = async () => {
        try {
            await mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('DB Conectada');
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }

    export default conectarDB
    

// Crea una base de datos con mongoose 

import mongoose from 'mongoose';
    const conectarToDB = async () => {
        try {
           const db = await mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${db.connection.host}:${db.connection.port}`
            console.log(`DB Conectada ${url}`);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }

    export default conectarToDB


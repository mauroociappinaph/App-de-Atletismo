import mongoose from 'mongoose';
require('dotenv').config();

export const connectDB = async () => {
    const url = process.env.MONGODB_URL;
    if (!url) {
        console.log('La variable de entorno MONGODB_URL no está configurada.');
        process.exit(1);
    }
    try {
        const db = await mongoose.connect(url);
        console.log(`Conectado a la base de datos: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
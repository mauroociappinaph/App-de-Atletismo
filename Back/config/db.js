// Crea una base de datos con mongoose
require("dotenv").config();
const mongoose = require("mongoose");
const { DB_URL } = process.env
const conectarToDB = async () => {
  try {
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`DB Conectada ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarToDB;

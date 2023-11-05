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
    const { host, port } = db.connection;
    console.log(`DB Conectada ${host}:${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = conectarToDB;

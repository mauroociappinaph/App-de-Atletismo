
import express from 'express';

const app = express();
const port = 4000;

//NOTE - Creación del servidor.
app.listen(port, () => {
  console.log(`Server running on ${port}. Que la fuerza te acompañe. Bro!`);
});

//REVIEW - Ruta especifica
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 

//REVIEW - Ruta general
app.use('/', (req, res) => {
    res.send('Hello World!');
  });

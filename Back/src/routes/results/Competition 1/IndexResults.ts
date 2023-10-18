// /backend/routes/results/index.ts

import express from 'express';
const router = express.Router();

import getAllResultsRouter from './getAllResults';
//import createResultRouter from './createResult';
//import updateResultRouter from './updateResult';
//import deleteResultRouter from './deleteResult';

router.get('/getAll', getAllResultsRouter);


// Ruta para obtener todos los resultados
router.use('/getAll', getAllResultsRouter);

// Ruta para crear un nuevo resultado
// router.use('/create', createResultRouter);

// Ruta para actualizar un resultado existente
// router.use('/update', updateResultRouter);

// Ruta para eliminar un resultado
// router.use('/delete', deleteResultRouter);

export default router;

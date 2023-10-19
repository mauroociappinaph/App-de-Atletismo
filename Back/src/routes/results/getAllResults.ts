// /backend/routes/results/getAllResults.ts

import express, { Request, Response } from 'express';
import { ResultModel } from '../../models/Results/ResultsOne';

const router = express.Router();

//Ruta para obtener todos los resultados

router.get('/', (req, res) => {
res.send("Desde get All")  
});

// router.get('/', async (req: Request, res: Response) => {
// try {
// Consulta la base de datos para obtener todos los resultados
//   const results = await ResultModel.find();
// res.status(200).json(results);
// } catch (error) {
//  res.status(500).json({ error: 'Error al obtener resultados.' });
// }
//});

export default router;

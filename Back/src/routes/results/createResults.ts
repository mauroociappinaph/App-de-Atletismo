// /backend/routes/results/createResult.ts

import express, { Request, Response } from 'express';
import { ResultModel } from '../../models/Results/ResultsOne';

const router = express.Router();

// Move the import statement outside of the route handler function
//const resultModel = ResultModel;

// Ruta para crear un nuevo resultado
//router.post('/', async (req: Request, res: Response) => {
  //try {
    //! Type the req.body object
    //const { name , competition, event, result, unit, date } = req.body as {
      //name: string;
      //competition: string;
      //event: string;
      //result: number;
      //unit: string;
      //date: Date;
    //};

    //! Use object destructuring to directly access the properties from req.body
   // const newResult = await resultModel.create({ name, competition, event, result, unit, date });

    // Type the promise returned by the post() function
   // const resultCreated = new Promise((resolve, reject) => {
     // if (newResult) {
       // resolve(newResult);
     // } else {
       // reject(new Error('Error al crear un resultado.'));
     // }
    //});

    //! Return the promise from the post() function
   // res.status(201).json(resultCreated);
  // } catch (error) {
   // res.status(500).json({ error: 'Error al crear un resultado.' });
 // }
// });

export default router;

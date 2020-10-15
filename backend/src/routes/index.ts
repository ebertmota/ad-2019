import { Router } from 'express';

import PersonController from '../app/controllers/PersonController';
import DrawController from '../app/controllers/DrawController';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'working' }));

const personController = new PersonController();
const drawController = new DrawController();

routes.get('/people', personController.index);

routes.post('/person', personController.create);
routes.put('/person', personController.update);
routes.delete('/person/:id', personController.delete);

routes.post('/draw', drawController.create);

export default routes;

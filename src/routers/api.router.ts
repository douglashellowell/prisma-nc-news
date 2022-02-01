import express from 'express';
import { getApiStatus } from '../controllers/api.controller';
const apiRouter = express.Router();

apiRouter.route('/').get(getApiStatus);

export default apiRouter;

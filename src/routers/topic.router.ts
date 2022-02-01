import express from 'express';
import { getAllTopics } from '../controllers/topic.controller';
const topicRouter = express.Router();

topicRouter.route('/').get(getAllTopics);

export default topicRouter;

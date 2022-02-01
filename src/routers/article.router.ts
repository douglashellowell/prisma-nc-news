import express from 'express';
import { getArticleById } from '../controllers/article.controller';

const articleRouter = express.Router();

// articleRouter.route('/').get();
articleRouter.route('/:article_id').get(getArticleById);

export default articleRouter;

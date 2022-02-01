import express from 'express';
import {
  getArticleById,
  patchArticleById,
} from '../controllers/article.controller';

const articleRouter = express.Router();

// articleRouter.route('/').get();
articleRouter.route('/:article_id').get(getArticleById).patch(patchArticleById);

export default articleRouter;

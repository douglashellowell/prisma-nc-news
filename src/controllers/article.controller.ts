import { RequestHandler } from 'express';
import { selectArticleById } from '../models/article.model';

export const getArticleById: RequestHandler = async (req, res, next) => {
  const { article_id } = req.params;
  const article = await selectArticleById(+article_id);

  if (article !== null) {
    res.status(200).send({ article });
  } else {
    next({ status: 404, message: 'article not found' });
  }
};

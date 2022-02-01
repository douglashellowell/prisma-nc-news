import { RequestHandler } from 'express';
import { selectArticleById, updateArticleById } from '../models/article.model';

export const getArticleById: RequestHandler = async (req, res, next) => {
  const { article_id } = req.params;

  const articleIdInt = parseInt(article_id);

  if (isNaN(articleIdInt)) {
    next({ status: 400, message: 'incorrect format' });
  } else {
    const article = await selectArticleById(articleIdInt);

    // findUnique returns null if no article found...
    if (article !== null) {
      res.status(200).send({ article });
    } else {
      next({ status: 404, message: 'article not found' });
    }
  }
};

export const patchArticleById: RequestHandler = async (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  const articleIdInt = parseInt(article_id);
  const votesInt = parseInt(inc_votes);

  if (isNaN(articleIdInt) || isNaN(votesInt)) {
    next({ status: 400, message: 'incorrect format' });
  } else {
    const article = await updateArticleById(articleIdInt, inc_votes);

    // update returns undefined if no article found...
    if (article !== undefined) {
      res.status(200).send({ article });
    } else {
      next({ status: 404, message: 'article not found' });
    }
  }
};

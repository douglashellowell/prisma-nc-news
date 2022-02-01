import { RequestHandler } from 'express';
import { selectAllTopics } from '../models/topic.model';

export const getAllTopics: RequestHandler = async (req, res, next) => {
  const topics = await selectAllTopics();
  res.status(200).send({ topics });
};

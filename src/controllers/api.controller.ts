import { RequestHandler } from 'express';

export const getApiStatus: RequestHandler = (req, res, next) => {
  res.status(200).send({ msg: 'greetings!' });
};

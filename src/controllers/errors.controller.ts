import { ErrorRequestHandler, RequestHandler } from 'express';

export const handleRouteNotFound: RequestHandler = (req, res, next) => {
  res.status(404).send({ msg: 'route not found!' });
};

export const handleCustomErrors: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err.status && err.message) {
    res.status(err.status).send({ status: err.status, message: err.message });
  }
};

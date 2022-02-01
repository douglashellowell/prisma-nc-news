import { RequestHandler } from 'express';
import { selectAllUsers } from '../models/user.model';

export const getAllUsers: RequestHandler = async (req, res, next) => {
  const users = await selectAllUsers();

  res.status(200).send({ users });
};

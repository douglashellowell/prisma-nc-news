import { Topic } from '@prisma/client';
import connection from '../db/connection';

export const selectAllTopics = async (): Promise<Topic[]> => {
  const topics = await connection.topic.findMany();

  return topics;
};

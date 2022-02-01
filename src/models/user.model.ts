import connection from '../db/connection';

export const selectAllUsers = async () => {
  const users = await connection.user.findMany();

  return users;
};

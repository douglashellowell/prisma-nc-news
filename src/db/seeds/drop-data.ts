import connection from '../connection';

const dropData = async () => {
  await connection.comment.deleteMany({});
  await connection.article.deleteMany({});
  await Promise.all([
    connection.user.deleteMany({}),
    connection.topic.deleteMany({}),
  ]);
};

export default dropData;

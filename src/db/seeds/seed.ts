import connection from '../connection';

import SeedData from '../../../main';

async function seed(data: SeedData) {
  await Promise.all([
    connection.topic.createMany({
      data: data.topicData,
    }),

    connection.user.createMany({
      data: data.userData,
    }),
  ]);

  await connection.article.createMany({
    data: data.articleData,
  });

  await connection.comment.createMany({
    data: data.commentData,
  });
}

export default seed;

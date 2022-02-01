import connection from '../db/connection';

export const selectArticleById = async (article_id: number) => {
  const article = await connection.article.findUnique({
    where: { article_id },
  });
  // findUnique returns null if no article found...

  return article;
};

export const updateArticleById = async (article_id: number, votes: number) => {
  const article = await connection.article.update({
    where: { article_id },
    data: { votes },
  });
  // update returns undefined if no article found...

  return article;
};

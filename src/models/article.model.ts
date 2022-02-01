import connection from '../db/connection';

export const selectArticleById = async (article_id: number) => {
  const article = await connection.article.findUnique({
    where: { article_id },
  });

  return article;
};

export type Article = {
  title: string;
  topic: string;
  author: string;
  body: string;
  created_at: string;
  votes: number;
};

export type Comment = {
  body: string;
  votes: number;
  author: string;
  article_id: number;
  created_at: string;
};

export type Topic = {
  description: string;
  slug: string;
};

export type User = {
  username: string;
  name: string;
  avatar_url: string;
};

export type SeedData = {
  articleData: Article[];

  commentData: Comment[];
  topicData: Topic[];

  userData: User[];
};

export default SeedData;

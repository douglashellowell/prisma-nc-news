import app from '../app';
import request from 'supertest';
import { Article, Topic } from '@prisma/client';
import dropData from '../db/seeds/drop-data';
import seed from '../db/seeds/seed';
import testData from '../../data/test-data/index';
import { prismaMock } from '../singleton';
import { ServerError } from '../types';

type Response<T> = {
  body: {
    [key: string]: T;
  };
};

type ErrorResponse = {
  body: {
    status: number;
    message: string;
  };
};

type tables = 'article' | 'topic' | 'comment' | 'user';
type method = 'create' | 'update' | 'findUnique' | 'findMany';

const setupMock = (tableName: tables, method: method, data: any) => {
  prismaMock[tableName][method].mockResolvedValue(data);
};

describe('GET: /not-a-route', () => {
  test('404 - returns message', async () => {
    const res = await request(app).get('/not-a-route').expect(404);
    expect(res.body.msg).toBe('route not found!');
  });
});

describe('GET: /', () => {
  test('200 - returns greeting message', async () => {
    const res = await request(app).get('/').expect(200);
    const { body } = res;
    expect(body.msg).toBe('greetings!');
  });
});

describe('GET: /api/topics', () => {
  test('200 - returns a list of topics', async () => {
    setupMock('topic', 'findMany', testData.topicData);

    const res: Response<Topic[]> = await request(app)
      .get('/api/topics')
      .expect(200);
    const {
      body: { topics },
    } = res;

    expect(topics.length > 0).toBe(true);
    topics.forEach((topic) => {
      expect(topic).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
        })
      );
    });
  });
});

describe('GET: /api/articles/:article_id', () => {
  it('200 - returns single article', async () => {
    const ARTICLE_ID = 1;

    prismaMock.article.findUnique
      // .calledWith({ where: { article_id: ARTICLE_ID } })
      .mockResolvedValue({
        ...testData.articleData[0],
        created_at: new Date(testData.articleData[0].created_at),
        article_id: ARTICLE_ID,
        updated_at: new Date(),
      });

    const res: Response<Article> = await request(app)
      .get(`/api/articles/${ARTICLE_ID}`)
      .expect(200);

    const {
      body: { article },
    } = res;

    expect(prismaMock.article.findUnique).toBeCalledWith({
      where: { article_id: 1 },
    });

    expect(article).toEqual(
      expect.objectContaining({
        article_id: 1,
        title: 'Living in the shadow of a great man',
        author: 'butter_bridge',
        topic: 'mitch',
        created_at: expect.any(String),
        body: expect.any(String),
        votes: 100,
      })
    );
  });
  it('404 - returns message when article not found', async () => {
    const ARTICLE_ID = 9999;

    prismaMock.article.findUnique.mockResolvedValue(null);

    const res: ErrorResponse = await request(app)
      .get(`/api/articles/${ARTICLE_ID}`)
      .expect(404);

    expect(res.body.message).toBe('article not found');
    expect(res.body.status).toBe(404);
  });
});

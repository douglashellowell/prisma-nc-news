import express from 'express';
import {
  handleCustomErrors,
  handleRouteNotFound,
} from './controllers/errors.controller';
import apiRouter from './routers/api.router';
import articleRouter from './routers/article.router';
import topicRouter from './routers/topic.router';
const app = express();

app.use('/', apiRouter);
app.use('/api/topics', topicRouter);
app.use('/api/articles', articleRouter);

app.use('*', handleRouteNotFound);

app.use(handleCustomErrors);

export default app;

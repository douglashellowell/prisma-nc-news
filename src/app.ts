import express from 'express';
import {
  handleCustomErrors,
  handleRouteNotFound,
} from './controllers/errors.controller';
import apiRouter from './routers/api.router';
import articleRouter from './routers/article.router';
import topicRouter from './routers/topic.router';
import userRouter from './routers/user.router';
const app = express();

app.use(express.json());

app.use('/', apiRouter);
app.use('/api/topics', topicRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);

app.use('*', handleRouteNotFound);

app.use(handleCustomErrors);

export default app;

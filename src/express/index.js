import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { AuthRouter } from './auth.router';

const app = express();

app.disable('x-powered-by');

if (['local', 'development'].find((env) => env === process.env.NODE_ENV)) {
  app.use(cors());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', AuthRouter);

export default app;

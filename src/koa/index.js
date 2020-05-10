import Koa from 'koa';
import Router from 'koa-router';
import { NOT_FOUND } from 'http-status-codes';

import logger from '../utils/logger';

const app = new Koa();
const router = new Router();

// basic app configurations for Koa.js
app.use(router.routes());
app.use(router.allowedMethods());
app.use((ctx) => {
  ctx.status = NOT_FOUND;
  ctx.body = `Cannot ${ctx.method} ${ctx.protocol}://${ctx.host}${ctx.path}`;
});
app.on('error', (err) => {
  logger.error(err.message, 'Koa');
});

// routing rules for the app
router.get('/', async (ctx) => {
  ctx.body = 'Welcome to node-babel-boilerplate web service';
});

export default app;

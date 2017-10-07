require('dotenv').config();

const serve = require('koa-static');
const Koa = require('koa');
const router = require('koa-router')();
const send = require('koa-send');
const path = require('path');

const app = new Koa();
const port = process.env.PORT || 3030;

router.get(/^\/app(?:\/|$)/, async (ctx, next) => {
  await send(ctx, 'public/index.html');
});

app
  .use(serve('public/'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port);

const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();

const serve = require('koa-static');
app.use(serve(__dirname + '/../client/dist/'));

const port = process.env.PORT || 3000;

router.get('/media/list', ctx => {
    ctx.body = ["1", "2"];
});

app.use(router.routes());

app.listen(port, () => {
    console.log(`KOA server listening on port ${port}`)
});
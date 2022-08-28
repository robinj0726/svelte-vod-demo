const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs/promises');

const router = new Router();
const app = new Koa();

const serve = require('koa-static');
app.use(serve(__dirname + '/../client/dist/'));

const port = process.env.PORT || 3000;

router.get('/media/list', async ctx => {
    let files = [];
    const dir = await fs.readdir('../media')
    for (const filename of dir) {
        files.push(filename)
    }
    ctx.body = files;
});

app.use(router.routes());

app.listen(port, () => {
    console.log(`KOA server listening on port ${port}`)
});
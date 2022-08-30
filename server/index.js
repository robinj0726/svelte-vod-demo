const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs/promises');

const router = new Router();
const app = new Koa();

const serve = require('koa-static');
app.use(serve(__dirname + '/../client/dist/'));

const views = require('koa-views')
const path = require('path')
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

const port = process.env.PORT || 3000;

router.get('/media/list', async ctx => {
    let files = [];
    const dir = await fs.readdir('/rec')
    for (const filename of dir) {
        if (filename.endsWith('.mp4')) {
            files.push(filename)
        }
    }
    ctx.body = files;
});

router.get('/media/file/:filename', async ctx => {
    let { filename } = ctx.params;
    await ctx.render('index', {
        mediafile: filename
    })
});


app.use(router.routes());

app.listen(port, () => {
    console.log(`KOA server listening on port ${port}`)
});
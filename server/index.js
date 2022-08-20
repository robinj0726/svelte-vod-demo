const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const port = process.env.PORT || 3000;

app.use(serve(__dirname + '/../client/dist/'));

app.listen(port, () => {
    console.log(`KOA server listening on port ${port}`)
});
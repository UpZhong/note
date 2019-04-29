const koa = require('koa');
const controller = require('koa-route');
const app = koa();
/**
 * 调用服务
 */
const service = require('./service/webAppService')
app.use(controller.get('/ajax/index', function* () {
    this.set('Cache-Control', 'no-cache');
    this.body = service.get_index_data();
}))

app.use(controller.get('/ajax/search', function* () {
    this.set('Cache-Control', 'no-cache');
    let querysting = require('querystring');
    let params = querysting.parse(this.req._parsedUrl.query);
    let start = params.start;
    let end = params.end;
    let keyword = params.keyword;
    this.body = yield service.get_search_data(start, end, keyword);
}))

/**
 * 页面渲染，采用ejs模板引擎
 */
// 页面渲染 start
const views = require('co-views');
const render = views('./view', {
    map: { html: "ejs" }
})
app.use(controller.get('/', function* () {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('index', { title: "首页" });
}))
// 页面渲染 end

/**
 * 读取静态资源，就可以在浏览器中使用路由/static/的方式访问金泰文件
 */
// 读取静态资源 start
const koa_static = require('koa-static-server');
app.use(koa_static({
    rootDir: './static/',
    rootPath: '/static/',
    maxage: 0

}))
// 读取静态资源 end

app.use(controller.get('/child', function* () {
    this.set('Cache-Control', 'no-cache');
    this.body = '我是子页面';
}))

app.listen(3001);
console.log("koa 服务已启动在3001端口")
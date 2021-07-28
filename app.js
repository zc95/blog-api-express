const express = require('express');
const app = express();
const figlet = require('figlet');

// 对传入的请求体进行解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由中间件
app.use('/blog-api/test', require('./routes/test'));

figlet('blog-api', (err, data) => console.log(data));

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(`blog-api is listening at http://localhost:${port}`);
});

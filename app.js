const express = require('express');
const app = express();
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');

// 初始化数据库
require('./utils/db');

// 对传入的请求体进行解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 渲染静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 路由中间件
app.use('/api/test', require('./routes/test'));
app.use('/api/post', require('./routes/post'));

// 炫酷但没啥用的文字工具
figlet('blog-api', (err, data) => console.log(data));

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(chalk.cyan('\nblog-api启动成功: ') + `http://localhost:${port}`);
    console.log(chalk.cyan('\n接口文档: ') + `http://localhost:${port}/apidoc`);
});

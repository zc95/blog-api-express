const mongoose = require('mongoose');
const chalk = require('chalk');
const url = 'mongodb://127.0.0.1:27017/blog';

mongoose.connect(url).then(() => {
    console.log(chalk.cyan('\n数据库连接成功: ') + url);
}).catch(err => {
    console.log(chalk.red('\n数据库连接失败: ') + err.message);
});

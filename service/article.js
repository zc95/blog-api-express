const Article = require('../models/article');
console.log(Article);

// 新增文章
function save(req) {
    var article = new Article(req);

    /** 插入数据 **/
    article.save(function(err) {
        console.log('save status:', err ? 'failed' : 'success');
        return 'ok';
    });
}

module.exports = {
    save
};
